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
import { BehaviorSubject } from 'rxjs';
import { ComponentMessagingService } from '../shared/services/component-messaging.service';

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
 startingFootballersCounter = 0;


  constructor(
    private service: FootballerService,
    private componentMessagingService: ComponentMessagingService
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
      return;
    }

    if (this.selectedFootballerType === 'starter') {

      if (this.startingFootballersCounter >= 11) {
        alert('You can only have 11 players in your starting 11. Remove a player from starting 11 or change the player\'s position.');
        return;
      } else {
        this.startingFootballersCounter++;
      }
    }
      this.service.addFootballer(this.newFootballer).subscribe();
      this.componentMessagingService.notifyFootballerAdded('New Footballer Added');
      console.log('Notify Added Footballer should have been called!');

  }

  notifyFootballerListToFilter(filter: string) {
    console.log('User wants footballers of type: ' + filter);
    this.filterFootballerList.emit(filter);
  }

  clear() {
    this.startingFootballersCounter = 0;
    console.log('Counter: ' + this.startingFootballersCounter );
  }
}
