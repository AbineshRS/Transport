import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appAnimateIn]',
  standalone: true
})
export class AnimateInDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit() {
    // Keep UI reliable on all viewports by revealing immediately.
    this.el.nativeElement.classList.add('is-visible');
  }
}
