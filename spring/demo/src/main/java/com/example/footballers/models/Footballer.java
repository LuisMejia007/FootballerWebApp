package com.example.footballers.models;


public class Footballer {


    public String name;
    public String position;
    public String dateOfBirth;
    public String nationality;

    public String getName() {
        return name;
    }

    public String getPosition() {
        return position;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public String getNationality(){
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setName(String name) { this.name = name; }

    public void setDateOfBirth(String dob) { this.dateOfBirth = dob; }

    public void setPosition(String position) { this.position = position; }

}
