import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FootballerListComponent } from './footballer-list/footballer-list.component';
import {FootballerService} from './shared/services/footballer.service';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { ListOfFootballersComponent } from './list-of-footballers/list-of-footballers.component';
import { FootballerDetailsComponent } from './footballer-details/footballer-details.component';
import { FootballerCardComponent } from './footballer-card/footballer-card.component';
import { StickNavDirective } from './directives/stick-nav.directive';
import { WindowReferenceService } from './shared/services/native_window_service/window-reference.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FilterListDirective } from './directives/filter-list.directive';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormationDisplayComponent } from './formation-display/formation-display.component';
import { ComponentMessagingService } from './shared/services/component-messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    FootballerListComponent,
    ListOfFootballersComponent,
    FootballerDetailsComponent,
    FootballerCardComponent,
    StickNavDirective,
    MenuBarComponent,
    FilterListDirective,
    SideMenuComponent,
    FormationDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers:
  [ FootballerService,
    FootballerListComponent,
    SideMenuComponent,
    ComponentMessagingService,
    WindowReferenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
