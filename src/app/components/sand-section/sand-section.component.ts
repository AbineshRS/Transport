import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-sand-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './sand-section.component.html',
  styleUrl: './sand-section.component.css'
})
export class SandSectionComponent {
  products = [
    {
      id: 'm-sand',
      name: 'M Sand',
      fullName: 'Manufactured Sand',
      description: 'Fine aggregate from crushed stone, used in concrete and block work. We supply and transport M sand for construction across Tamil Nadu and South India.',
      image: '/images/m-sand.jpg',
      alt: 'M sand – manufactured sand for construction'
    },
    {
      id: 'p-sand',
      name: 'P Sand',
      fullName: 'Plastering Sand',
      description: 'Fine, smooth sand suitable for plaster and masonry. We supply and transport P sand for plastering and finishing work.',
      image: '/images/p-sand.jpg',
      alt: 'P sand – plastering sand for construction'
    },
    {
      id: 'blue-metal',
      name: 'Blue Metal',
      fullName: 'Construction Aggregate',
      description: 'Crushed stone aggregate for concrete and road base. We supply and transport blue metal in various sizes for your construction needs.',
      image: '/images/blue-metal.png',
      alt: 'Blue metal – construction aggregate'
    }
  ];
}
