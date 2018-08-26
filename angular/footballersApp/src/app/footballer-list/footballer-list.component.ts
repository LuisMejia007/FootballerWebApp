import { Component, OnInit, ViewChild } from '@angular/core';
import {Footballer} from '../shared/models/footballer';
import {FootballerService} from '../shared/services/footballer.service';
import {FormsModule} from '@angular/forms';
import { BehaviorSubject } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-footballer-list',
  templateUrl: './footballer-list.component.html',
  styleUrls: ['./footballer-list.component.css', '../shared/css/styles.css']
})
export class FootballerListComponent implements OnInit {

  @ViewChild('myForm') myForm;
  message: string;
  name: string;
  footballer: Footballer;
  footballers: Footballer[] = [];
  sharedFootballerList = new BehaviorSubject<Footballer[]>(null);

  constructor(
    private service: FootballerService
  ) { }

  ngOnInit() {
    this.getFootballers();
    this.service.connect('guest', 'guest');
    this.service.getMessageSubject()
    .subscribe((message) => {

      this.message = message;

      if (this.message === 'Footballer added to queue'
      ||
      this.message === 'Footballer Not Added. Please make sure to spell a player\'s name correctly or be more descriptive.') {

        if (this.message === 'Footballer Not Added. Please make sure to spell a player\'s name correctly or be more descriptive.') {
          // alert(this.message);
        }

        this.getFootballers();
        this.sharedFootballerList.next(this.footballers);
      }

    });


  }



  placeName(name: string) {
    console.log(name);
    this.footballer = new Footballer();
    this.footballer.setName(name);
    this.service.placeName(this.footballer).subscribe();
  }

  getFootballers() {
    this.service.getFootballers()
    .subscribe( footballers => this.footballers = footballers);
  }
  sayHello(message: string) {
    this.service.sayHello(message).subscribe();
  }

  shareFootballerList() {
    return this.sharedFootballerList.asObservable();
  }

}
