import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
        // display: 'hidden',
        // left: '0px'
        transform: 'translateX(-50%)'
      })),
      state('show', style({
        // display: 'visible',
        // left: '50%'
        transform: 'translateX(50%)'
      })),
      transition('hide => show', animate('0.2s ease-in')),
      transition('show => hide', animate('0.2s ease-out'))
    ])
  ]
})
export class SideMenuComponent implements OnInit {

 @Input() menuToggleValue: string;
 @Output() filterFootballerList: EventEmitter<string> = new EventEmitter<string>();
 filter: string;
 newFootballer: Footballer;
 name: string;
 selectedFootballerType: string;

  constructor(
    private service: FootballerService
  ) { }

  ngOnInit() {
    console.log('Menu Toggle Value: ' + this.menuToggleValue);
    console.log('Type: ' + this.selectedFootballerType);
  }



  addNewFootballer(name: string) {
    this.newFootballer = new Footballer();
    this.newFootballer.setName(name);

    if (this.selectedFootballerType != null) {

      this.newFootballer.setFootballerType(this.selectedFootballerType);

    } else {
      alert('Please add what type of footballer youd like to add');
    }
    this.service.addFootballer(this.newFootballer).subscribe();
  }

  notifyFootballerListToFilter(filter: string) {
    console.log('User wants footballers of type: ' + filter);
    this.filterFootballerList.emit(filter);
  }
}
