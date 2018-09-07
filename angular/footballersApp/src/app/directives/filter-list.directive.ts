import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import {WindowReferenceService} from '../shared/services/native_window_service/window-reference.service';

@Directive({
  selector: '[appFilterList]'
})
export class FilterListDirective {

  constructor(
    private windowService: WindowReferenceService,
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {

      if (this.windowService.nativeWindow.pageYOffset > 6) {
          this.renderer.setStyle(this.element.nativeElement, 'position', 'fixed');
          this.renderer.setStyle(this.element.nativeElement, 'bottom', '0');
      }

      if (this.windowService.nativeWindow.pageYOffset < 6) {
        this.renderer.removeStyle(this.element.nativeElement, 'position');
        this.renderer.removeStyle(this.element.nativeElement, 'bottom');
      }
  }

}
