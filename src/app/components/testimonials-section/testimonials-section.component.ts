import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {
  readonly testimonials = [
    {
      quote:
        'We received red bricks in good condition and on time for our villa project near Coimbatore. Communication was very clear.',
      author: 'Site Engineer - Coimbatore'
    },
    {
      quote:
        'Their planning for part-load deliveries helped us avoid delays. Good option for regular construction material transport.',
      author: 'Contractor - Chennai'
    },
    {
      quote:
        'Quick quote, reliable dispatch updates, and smooth unloading coordination. Highly useful for multiple project locations.',
      author: 'Builder - Bangalore'
    }
  ];
}
