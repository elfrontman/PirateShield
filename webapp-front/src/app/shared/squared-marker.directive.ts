import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSquaredMarker]'
})
export class SquaredMarkerDirective implements AfterViewInit{

  constructor(private el: ElementRef, private rendered: Renderer2) {
    console.log('directive');
    console.log(this.rendered);
  }

  ngAfterViewInit(): void {
    setTimeout(_ => {
      this.rendered.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.clientWidth  + 'px');
    }, 100);
  }

}
