import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  style,
  state
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { FootballerService } from '../shared/services/footballer.service';
import { Footballer } from '../shared/models/footballer';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger('toggleMenu', [
      state('hide', style({
        display: 'hidden',
        left: '0px'
      })),
      state('show', style({
        display: 'visible',
        left: '50%'
      })),
      transition('hide => show', animate('1000ms ease-in')),
      transition('show => hide', animate('1000ms ease-out'))
    ])
  ]
})
export class SideMenuComponent implements OnInit {

 @Input() menuToggleValue: string;
 newFootballer: Footballer;
 name: string;

  constructor(
    private service: FootballerService
  ) { }

  ngOnInit() {
    console.log('Menu Toggle Value: ' + this.menuToggleValue);
  }



  addNewFootballer(name: string) {
    this.newFootballer = new Footballer();
    this.newFootballer.setName(name);
    this.service.placeName(this.newFootballer).subscribe();
  }



}
