import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FootballerService} from '../shared/services/footballer.service';
import { Footballer } from '../shared/models/footballer';

@Component({
  selector: 'app-footballer-details',
  templateUrl: './footballer-details.component.html',
  styleUrls: ['./footballer-details.component.css']
})
export class FootballerDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: FootballerService
  ) { }

  footballer: Footballer;
  message: string;
  imgUrl: string;

  ngOnInit() {

    this.getFootballer();

    this.service.getMessageSubject().subscribe(message => this.message = message);

    if (this.message === 'Get footballer by name') {

      try {
        this.getFootballer();
      } catch (e) {
        console.log('Exception thrown in footballer-details.component.ts: ' + e);
      }
    }

  }


  getFootballer() {
    const footballerName = this.route.snapshot.paramMap.get('name');
    console.log('Controller Name: ' + footballerName);
    this.service
    .getFootballerByName(footballerName)
    .subscribe(footballer => this.footballer = footballer);

  }

}
