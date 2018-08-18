package com.example.footballers.models;


public class Footballer {


    public String name;
    public String fullName;
    public String position;
    public String dateOfBirth;
    public String placeOfBirth;
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

    public String getFullName() { return this.fullName; }

    public String getPlaceOfBirth() { return this.placeOfBirth; }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setName(String name) { this.name = name; }

    public void setDateOfBirth(String dob) { this.dateOfBirth = dob; }

    public void setPosition(String position) { this.position = position; }

    public void setFullName(String fullName) { this.fullName = fullName; }

    public void setPlaceOfBirth(String placeOfBirth) { this.placeOfBirth = placeOfBirth; }

}
