import { Component, OnInit } from '@angular/core';
import {Footballer} from '../shared/models/footballer';
import {FootballerService} from '../shared/services/footballer.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  newFootballer: Footballer;
  name: string;
  constructor(
    private service: FootballerService
  ) { }

  ngOnInit() {
  }


  addNewFootballer(name: string) {
    this.newFootballer = new Footballer();
    this.newFootballer.setName(name);
    this.service.placeName(this.newFootballer).subscribe();
  }

}
