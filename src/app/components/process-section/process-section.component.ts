import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.css'
})
export class ProcessSectionComponent {
  readonly steps = [
    {
      title: 'Share Requirement',
      description:
        'Send pickup point, destination city, material type and quantity. We suggest the right transport plan.'
    },
    {
      title: 'Get Quote Fast',
      description:
        'Receive transparent price for bricks transport, M sand, P sand or blue metal with expected delivery schedule.'
    },
    {
      title: 'Dispatch and Tracking',
      description:
        'Your load is dispatched with trained handling and route updates to keep your site team informed.'
    },
    {
      title: 'Site Delivery',
      description:
        'Materials reach your project location with minimum delay and coordinated unloading support.'
    }
  ];
}
