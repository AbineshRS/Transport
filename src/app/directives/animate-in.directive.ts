import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appAnimateIn]',
  standalone: true
})
export class AnimateInDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );
    observer.observe(this.el.nativeElement);
  }
}
