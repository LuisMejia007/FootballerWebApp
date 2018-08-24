package com.example.footballers.controllers;

import com.example.footballers.models.Footballer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.footballers.services.footballersService;
import java.util.ArrayList;

@Controller
public class footballersController {



    @Autowired
    footballersService service;


    @CrossOrigin(origins = "http://localhost:1200")
    @PostMapping(value = "/addFootballer")
    @ResponseStatus(HttpStatus.CREATED)
    public void addFootballer(@RequestBody Footballer footballer) {
        this.service.addFootballer(footballer);
    }


    @CrossOrigin(origins = "http://localhost:1200")
    @GetMapping(value = "/getFootballers")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public ArrayList<Footballer> getFootballers() {
        return this.service.getFootballers();
    }

    @RequestMapping(value = "/footballerDetails/{name}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:1200")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Footballer getFootballerByName(@PathVariable String name) {

        System.out.println("Name brought in: " + name);

        return this.service.getFootballerByName(name);
    }

    @SendTo("/topic/public")
    public String notify(String message) {
        return message;
    }

}
