import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  toggleMenuValue: string;
  showMenuEventHandler(event: any) {
    this.toggleMenuValue = event;
    console.log('Event received: ' + this.toggleMenuValue);
  }
}


