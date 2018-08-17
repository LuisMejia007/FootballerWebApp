import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FootballerListComponent } from './footballer-list/footballer-list.component';
import {FootballerService} from './shared/services/footballer.service';
import { AppRoutingModule } from './/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { ListOfFootballersComponent } from './list-of-footballers/list-of-footballers.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballerListComponent,
    ListOfFootballersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [ FootballerService, FootballerListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
