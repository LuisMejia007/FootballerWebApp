import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-display',
  templateUrl: './formation-display.component.html',
  styleUrls: ['./formation-display.component.css']
})
export class FormationDisplayComponent implements OnInit {

  formationSelected = '4-4-2';
  constructor() { }

  ngOnInit() {
  }

}
