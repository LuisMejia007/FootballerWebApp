import { Injectable, OnInit, OnDestroy } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Footballer } from '../models/footballer';

import * as SockJs from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

const httpOptions = {
  headers: new HttpHeaders({'string-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class FootballerService {

  stompClient: any;
  private messageSubject$ = new BehaviorSubject<string>('Footballer added to queue');

  constructor(
    private http: HttpClient
  ) { }


  placeName(footballer: Footballer): Observable<Footballer> {
    const url = 'http://localhost:8080/addFootballer';
    return this.http.post<Footballer>(url, footballer, httpOptions);
  }

  getFootballers(): Observable<Footballer[]> {
    const url = 'http://localhost:8080/getFootballers';
    return this.http.get<Footballer[]>(url, httpOptions);
  }


  getFootballersByType(footballerType: string): Observable<Footballer[]> {
    const url = 'http://localhost:8080/getFootballers/';
    return this.http.get<Footballer[]>(url + footballerType, httpOptions);
  }

  getFootballerByName(name: string): Observable<Footballer> {
      const url = 'http://localhost:8080/footballerDetails/';
     name = name.replace(' ', '_');
      console.log('Service Name: ' + url + name);
      return this.http.get<Footballer>(url + name, httpOptions);
  }

  sayHello(message: string): Observable<string> {
    const url = 'http://localhost:8080/sayHello';
    return this.http.post<string>(url, message, httpOptions);
  }


  // Connecting to WebSocket found in Spring Boot MS. Also checkout polyfill.ts
  connect(user: string, password: string) {
    console.log('Inside Connect. Guest and Password: ' + user + ' ' + password);
    const socket = new SockJs('http://localhost:8080/football-ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect(user, password, this.onConnected);
    console.log('Attempting to connect!');
  }

  onConnected = (frame: any) => {
    console.log('Frame: ' + frame);
    this.stompClient.subscribe('/topic/public', this.onMessageReceived);
  }


  onMessageReceived = (message: any) => {
    console.log('Message Received from MS: '  +  message);
    try {
      this.messageSubject$.next(message.body);
    } catch (e) {
      console.log('Error: ' + e);
    }
  }

  getMessageSubject() {
    return this.messageSubject$.asObservable();
  }
}
