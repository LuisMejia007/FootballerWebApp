package com.example.footballers.services;

import com.example.footballers.models.Footballer;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import org.springframework.amqp.core.Exchange;
import org.jsoup.nodes.Document;

import java.util.ArrayList;

@Service
public class footballersService {

    private final Exchange exchange;
    private final RabbitTemplate rabbitTemplate;


    ArrayList<Footballer> footballers = new ArrayList<Footballer>();


    public footballersService(RabbitTemplate rabbitTemplate, Exchange exchange){

        this.exchange = exchange;
        this.rabbitTemplate = rabbitTemplate;
    }

    public void addFootballer(Footballer footballer) {

        this.footballers.add(footballer);

        String tempName = footballer.getName();
        tempName = this.convertToQueryString(tempName);

        final String url = "https://en.wikipedia.org/wiki/" + tempName;

        try {
            final Document doc = Jsoup.connect(url).get();

            for (Element info_rows : doc.select("table.infobox.vcard tr")) {

                System.out.println(info_rows.select("tr:nth-of-type(3)").text());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        rabbitTemplate.convertAndSend(this.exchange.getName(),"footballer.add", "Footballer added to queue");
    }

    public ArrayList<Footballer> getFootballers () {

        rabbitTemplate.convertAndSend(this.exchange.getName(),"footballer.list", "Getting list of footballers");
        return this.footballers;
    }


    public String convertToQueryString(String tempName) {

        int indexOfSpace = tempName.indexOf(" ");
        String tempFirstName = tempName.substring(0, indexOfSpace);
        String tempLastName = tempName.substring(indexOfSpace + 1, tempName.length());

        String convertFirstNameToUpper = tempFirstName.substring(0, 1);
        String convertLastNameToUpper = tempLastName.substring(0, 1);


        convertFirstNameToUpper = convertFirstNameToUpper.toUpperCase();
        convertLastNameToUpper = convertLastNameToUpper.toUpperCase();


        tempFirstName = tempFirstName
                .replaceFirst(tempFirstName.substring(0,1) , convertFirstNameToUpper);
        tempLastName = tempLastName
                .replaceFirst(tempLastName.substring(0,1) , convertLastNameToUpper);


        tempName = tempFirstName + "_" + tempLastName;

        return tempName;
    }
}
