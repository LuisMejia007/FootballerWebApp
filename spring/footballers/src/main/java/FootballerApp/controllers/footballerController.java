package FootballerApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import FootballerApp.services.footballerServices;
import FootballerApp.models.Footballer;

import java.util.ArrayList;

@Controller
public class footballerController {


    @Autowired
    private footballerServices services;




    @CrossOrigin(origins = "http://localhost:1200")
    @PostMapping(value = "/addFootballer")
    @ResponseStatus(HttpStatus.CREATED)
    public void addFootballer(@RequestBody Footballer footballer) {
        this.services.addFootballer(footballer);
    }


    @CrossOrigin(origins = "http://localhost:1200")
    @GetMapping(value = "/getFootballers")
    @ResponseStatus(HttpStatus.OK)
    public ArrayList<Footballer> getFootballers(){
        return this.services.getFootballers();
    }
}
