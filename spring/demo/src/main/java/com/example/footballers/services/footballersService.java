package com.example.footballers.services;

import com.example.footballers.models.Footballer;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import org.springframework.amqp.core.Exchange;
import org.jsoup.nodes.Document;

import java.awt.datatransfer.SystemFlavorMap;
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



        String tempName = footballer.getName();
        tempName = this.convertToQueryString(tempName);
        footballer.setName(tempName.replace("_", " "));


        if (this.scrapeFootballerInfo(footballer, tempName)) {

            this.footballers.add(footballer);
            System.out.println("Footballer: " + footballer.getName() + " added to queue");
            rabbitTemplate.convertAndSend(this.exchange.getName(),"footballer.add", "Footballer added to queue");
        }

    }


    public Footballer getFootballerByName(String name){

        name = name.replace("_", " ").trim();
        System.out.println("Finding: " + name);
        for (Footballer footballer : this.footballers) {

            System.out.println("Footballer in queue: " +  footballer.getName());


            if ( name.equals( footballer.getName().trim() ) ) {

                System.out.println("Footballer found!: " + footballer.getName());
                rabbitTemplate.convertAndSend(this.exchange.getName(), "footballer.getByName", "Get footballer by name");
                return footballer;
            }

        }
        return null;
    }

    public ArrayList<Footballer> getFootballers () {

        return this.footballers;
    }

    public ArrayList<Footballer> getFootballersByType(String footballerType) {

        ArrayList<Footballer> footballersByType = new ArrayList<Footballer>();

        for (Footballer footballer : this.footballers) {

            if (!footballer.getFootballerType().equals(footballerType)) {
                continue;
            }
            footballersByType.add(footballer);
        }

        try {
            if (footballersByType.isEmpty())
                System.out.println("Did not find any footballers by " + footballerType + " type");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return footballersByType;
    }


    public String convertToQueryString(String tempName) {


        int lastWhiteSpaceIndex = 0;
        int numberOfWhiteSpaces = 0;
        ArrayList<String> names = new ArrayList<String>();

        for (int i = 0; i < tempName.length(); i++) {

            char temp [] = tempName.toCharArray();

            if( temp[i] == ' ') {

               numberOfWhiteSpaces++;
               names.add(tempName.substring(lastWhiteSpaceIndex, i).trim());
               lastWhiteSpaceIndex = i;             // update the last time we found a white space with the new index
            }
        }

        if (numberOfWhiteSpaces >= 1) {

            names.add(tempName.substring(lastWhiteSpaceIndex, tempName.length()).trim());
        } else {
            names.add(tempName);
        }


        String finalOfficialName = "";
        for (int i = 0; i < names.size(); i++) {

            String oldFirstLetter = names.get(i).substring(0,1);
            String newFirstLetter = oldFirstLetter.toUpperCase();
            String replacement = names.get(i).replaceFirst(oldFirstLetter, newFirstLetter);

            finalOfficialName += replacement + " ";
        }
        finalOfficialName = finalOfficialName.trim().replaceAll(" ", "_");

        return finalOfficialName;
    }

    public boolean scrapeFootballerInfo(Footballer footballer, String tempName) {

        final String url = "https://en.wikipedia.org/wiki/" + tempName;

        try {
            final Document doc = Jsoup.connect(url).get();

            for (Element info_rows : doc.select("table.infobox.vcard tr")) {

                String name = info_rows.getElementsByClass("nickname").text().replace("[1]", "");
                String dob = info_rows.getElementsByClass("bday").text();
                String birthplace = info_rows.getElementsByClass("birthplace").text();
                String position = info_rows.getElementsByClass("role").text();

                if (!name.equals("")) {
                    footballer.setFullName(name);
                }
                if (!dob.equals("")) {
                    footballer.setDateOfBirth(dob);
                }
                if (!birthplace.equals("")) {
                    footballer.setPlaceOfBirth(birthplace);
                }
                if (!position.equals("")) {
                    footballer.setPosition(position);
                }
            }


            String img = this.getFootballerImg(doc);

            footballer.setImgUrl(img);

            return true;

        } catch (Exception e) {

            rabbitTemplate
                    .convertAndSend(this.exchange.getName(),
                            "footballer.notAdded",
                            "Footballer Not Added. " +
                                    "Please make sure to spell a player's name correctly or be more descriptive.");

        }

        return false;
    }


    public String getFootballerImg(Document doc) {

        String img = "";
        String url = "";


        try {

            Element e = doc.select("table.infobox.vcard tr").tagName("td").first();

            img = e.getElementsByClass("image").tagName("img").get(0).absUrl("href");
            img = img.replace(" ", "_");
            url = e.getElementsByClass("image").tagName("img").get(0).absUrl("href").replace(" ", "_");

            Document imgDoc = Jsoup.connect(url).get();
            Element imgGetter = imgDoc.getElementsByClass("fullImageLink").tagName("a").first().child(0);
            System.out.println("Img Getter: \n" + imgGetter.html());
            img = imgGetter.absUrl("href");
            System.out.println("New Image: " + img);

        } catch (Exception e) {

            System.out.println("Error in getFootballerImg(): " + e);
            e.printStackTrace();
        }

        return img;
    }
}
