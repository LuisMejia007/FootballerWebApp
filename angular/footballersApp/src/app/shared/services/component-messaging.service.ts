import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComponentMessagingService {

  addFootballerNotification = new BehaviorSubject<string>('New Footballer Added');
  constructor() { }

  notifyFootballerAdded(msg: any) {
    this.addFootballerNotification.next(msg);
    console.log('CMS: notification added!');
  }

  getFootballerAddedNotification() {
    console.log('CMS: subscribed to notification!');
    return this.addFootballerNotification.asObservable();
  }
}
