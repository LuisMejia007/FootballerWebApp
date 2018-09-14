import { Component, OnInit, Input } from '@angular/core';

import {Footballer} from '../shared/models/footballer';

@Component({
  selector: 'app-footballer-card',
  templateUrl: './footballer-card.component.html',
  styleUrls: ['./footballer-card.component.css', '../shared/css/styles.css']
})
export class FootballerCardComponent implements OnInit {

  @Input() footballer: Footballer;

  constructor() { }
  ngOnInit() {
  }
}
