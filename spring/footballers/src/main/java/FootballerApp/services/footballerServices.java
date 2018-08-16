package FootballerApp.services;

import FootballerApp.models.Footballer;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class footballerServices {


    ArrayList<Footballer> footballers = new ArrayList<Footballer>();


    public void addFootballer (Footballer footballer) {
        this.footballers.add(footballer);
    }

    public ArrayList<Footballer> getFootballers() {
        return this.footballers;
    }
}
