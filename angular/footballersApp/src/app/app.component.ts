import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `<nav>
  <a routerLink = "/addFootballer" routerLinkActive = "active"> Add a Footballer </a>
  <a routerLink = "/getFootballers" routerLinkActive = "active"> Footballer List </a>
</nav>
<router-outlet>
</router-outlet>`
})
export class AppComponent {
  title = 'app';
}
