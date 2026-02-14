import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {
  services = [
    {
      icon: '🚚',
      title: 'Bulk Bricks Transport',
      description: 'We move red bricks in full truckloads or part-loads from Tamil Nadu and Kerala kilns to your site. Brief: one call for quantity and address, we quote and deliver—no breakage worries.'
    },
    {
      icon: '📍',
      title: 'Bricks Delivery Across South India',
      description: 'Bricks transport to Chennai, Coimbatore, Bangalore, Kochi, Hyderabad, Madurai, Trichy, and nearby. We cover Tamil Nadu, Kerala, Karnataka and Andhra Pradesh with door-to-door delivery.'
    },
    {
      icon: '🛡️',
      title: 'Safe Brick Handling',
      description: 'Bricks are loaded and stacked properly, transported with care, and unloaded at site. Brief: we minimise breakage so you get maximum usable bricks for your construction.'
    },
    {
      icon: '⏱️',
      title: 'On-Time Bricks Delivery',
      description: 'We work to your schedule so construction is not delayed. Brief: you get a delivery window and we stick to it—ideal when you need bricks by a specific date.'
    }
  ];
}
