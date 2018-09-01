import { Directive, HostListener, ElementRef } from '@angular/core';
import {WindowReferenceService} from '../shared/services/native_window_service/window-reference.service';

@Directive({
  selector: '[appStick]'
})
export class StickNavDirective {

  myWindow: any;
  element: any;
  constructor(
    private reference: ElementRef,
    private window: WindowReferenceService
  ) { 
    this.myWindow = window.nativeWindow;
    this.element = reference;
  }


  @HostListener('window: scroll', ['$event'])
  windowScroll(e) {

    if (this.myWindow.pageYOffset >  200) {
      console.log('Scroll!: ' + this.myWindow.pageYOffset);
    }
    // console.log('Scroll!: ' + this.myWindow.pageYOffset);
  }

}
