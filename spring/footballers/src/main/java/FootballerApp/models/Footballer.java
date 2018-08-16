package FootballerApp.models;

public class Footballer {


    String name;
    String position;
    String nationality;
    String dateOfBirth;


    Footballer() {}


    public void setName(String name) {
        this.name = name;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getName() {
        return name;
    }

    public String getPosition() {
        return position;
    }

    public String getNationality() {
        return nationality;
    }

    public String getDateOfBirth(){
        return dateOfBirth;
    }
}
