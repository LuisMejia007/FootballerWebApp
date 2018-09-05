import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Footballer} from '../shared/models/footballer';
import {FootballerService} from '../shared/services/footballer.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  animations: []
})
export class MenuBarComponent implements OnInit {

  newFootballer: Footballer;
  name: string;
  showMenu = 'hide';
  @Output() showcaseMenuEvent: EventEmitter<string> = new EventEmitter();

  constructor
  (  private service: FootballerService ) { }

  ngOnInit() {
  }

  toggleSideMenu() {
    // ternary operator: value === condition ? expr1: expr2.
    // expr1 = show, expr2 = hide. If true then execute expr1 else expr2.
    this.showMenu = this.showMenu === 'hide' ? 'show' : 'hide';
    this.showcaseMenuEvent.emit(this.showMenu);
    console.log('Event emitted: ' + this.showMenu);
  }

}
