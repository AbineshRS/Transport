import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-marketing-content-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './marketing-content-section.component.html',
  styleUrl: './marketing-content-section.component.css'
})
export class MarketingContentSectionComponent {
  readonly focusCities = [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Trichy',
    'Bangalore',
    'Kochi',
    'Hyderabad'
  ];
}
