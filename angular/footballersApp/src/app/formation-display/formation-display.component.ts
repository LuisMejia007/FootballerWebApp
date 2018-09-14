import { Component, OnInit } from '@angular/core';
import {Footballer} from '../shared/models/footballer';
import {FootballerListComponent} from '../footballer-list/footballer-list.component';
import { FootballerService } from '../shared/services/footballer.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ComponentMessagingService } from '../shared/services/component-messaging.service';

@Component({
  selector: 'app-formation-display',
  templateUrl: './formation-display.component.html',
  styleUrls: ['./formation-display.component.css']
})
export class FormationDisplayComponent implements OnInit {

  formationSelected = '4-4-2';
  footballerName: string;
  footballer: Footballer;
  footballers: Footballer[] = [];
  sideMenuMessage: string;

  constructor(
    private service: FootballerService,
    private componentMessagingService: ComponentMessagingService
  ) { }

  ngOnInit() {
    console.log('Footballers: ' + this.footballers);
   this.componentMessagingService
   .getFootballerAddedNotification()
   .subscribe( (msg) => {
     console.log('Getting Message: ' + msg);
     this.sideMenuMessage = msg;
     if (this.sideMenuMessage === 'New Footballer Added') {
       console.log('Message Success!!!');
       this.service.getFootballers()
      .subscribe( footballers => this.footballers = footballers);
      //  this.printBallers();
     }
   }
  );

  }

  checkIfStarter(element, index, array ) {
    if (element.position === 'starter') {
      return true;
    } else {
      return false;
    }
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    const content = event.dataTransfer.getData('text/plain');
    const contentCopy = document.getElementById(content).cloneNode(true);
    event.target.appendChild(contentCopy);
    // this.footballers.push(contentCopy.textContent);
  }

  dragStartHandler(event: any) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  // printBallers() {

  //   console.log('Ballers will print');
  //   console.log(this.footballers.length);
  //   for (let entry of this.footballers) {
  //     console.log('Printing ballers');
  //       console.log(entry.name);
  //   }
  // }

}
