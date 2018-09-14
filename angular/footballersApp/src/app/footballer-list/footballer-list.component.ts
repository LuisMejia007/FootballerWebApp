import { Component, OnInit, ViewChild } from '@angular/core';
import {Footballer} from '../shared/models/footballer';
import {FootballerService} from '../shared/services/footballer.service';
import { BehaviorSubject } from 'rxjs';
import {
  trigger,
  animate,
  transition,
  state,
  style
} from '@angular/animations';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-footballer-list',
  templateUrl: './footballer-list.component.html',
  styleUrls: ['./footballer-list.component.css', '../shared/css/styles.css'],
  animations: []
})
export class FootballerListComponent implements OnInit {

  @ViewChild('myForm') myForm;
  message: string;
  name: string;
  toggleMenuValue: string;
  footballer: Footballer;
  footballers: Footballer[] = [];
  sharedFootballerList = new BehaviorSubject<Footballer[]>(null);
  filterStatus: string;

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
  getFootballers() {
    this.service.getFootballers()
    .subscribe( footballers => this.footballers = footballers);
  }

  getFootballersByType(filter: string) {
    this.service.getFootballersByType(filter).subscribe(footballers => this.footballers = footballers);
  }

  shareFootballerList() {
    return this.sharedFootballerList.asObservable();
  }


  handleToggleMenuEvent(event: any) {
    this.toggleMenuValue = event;
    console.log('Event received: ' + this.toggleMenuValue);
  }

  handleSideMenuFilterByFootballerType(event: any) {
      this.filterStatus = event;
      console.log('Commencing filter by ' + this.filterStatus + ' type');
      if (this.filterStatus === 'all') {
        this.getFootballers();
      } else {
        this.service
        .getFootballersByType(this.filterStatus)
        .subscribe(footballers => this.footballers = footballers);
      }

  }

}
