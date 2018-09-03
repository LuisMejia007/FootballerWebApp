import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import {WindowReferenceService} from '../shared/services/native_window_service/window-reference.service';

@Directive({
  selector: '[appStick]'
})
export class StickNavDirective {

  myWindow: any;
  element: any;
  constructor(
    private reference: ElementRef,
    private window: WindowReferenceService,
    private renderer: Renderer2
  ) {
    this.myWindow = window.nativeWindow;
    this.element = reference;
  }


  @HostListener('window: scroll', ['$event'])
  windowScroll(e) {

    if (this.myWindow.pageYOffset >  5) {
      this.renderer.setStyle(this.element.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.element.nativeElement, 'z-index', '1 !important');
    }

    if (this.myWindow.pageYOffset < 5) {
      this.renderer.removeStyle(this.element.nativeElement, 'position');
      this.renderer.removeStyle(this.element.nativeElement, 'z-index');
    }
    // console.log('Scroll: ' + this.myWindow.pageYOffset);
  }

}
