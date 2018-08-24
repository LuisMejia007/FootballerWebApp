import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';
import { FootballerListComponent } from './footballer-list/footballer-list.component';
import { ListOfFootballersComponent } from './list-of-footballers/list-of-footballers.component';
import { FootballerDetailsComponent } from './footballer-details/footballer-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/addFootballer', pathMatch: 'full' },
  { path: 'getFootballers', component: ListOfFootballersComponent },
  { path: 'addFootballer', component: FootballerListComponent },
  { path: 'footballerDetails/:name', component: FootballerDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
