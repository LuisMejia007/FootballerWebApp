import { Component, OnInit, OnDestroy } from '@angular/core';
import { FootballerService } from '../shared/services/footballer.service';
import { Footballer } from '../shared/models/footballer';
import { FootballerListComponent } from '../footballer-list/footballer-list.component';

@Component({
  selector: 'app-list-of-footballers',
  templateUrl: './list-of-footballers.component.html',
  styleUrls: ['./list-of-footballers.component.css']
})
export class ListOfFootballersComponent implements OnInit {

  footballers: Footballer[];
  message: string;
  constructor(
    private service: FootballerService,
    private mainFootballerComponent: FootballerListComponent
  ) { }

  ngOnInit() {

    this.mainFootballerComponent
    .shareFootballerList()
    .subscribe(footballers => this.footballers = footballers);

    this.getFootballers();
  }



  getFootballers(): void {
    this.service.getFootballers()
    .subscribe(footballers => this.footballers = footballers);
  }

}
