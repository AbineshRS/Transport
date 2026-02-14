import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-brick-sizes-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './brick-sizes-section.component.html',
  styleUrl: './brick-sizes-section.component.css'
})
export class BrickSizesSectionComponent {
  /** Standard wire-cut brick sizes we transport – ref: IndiaMART Chennai wire-cut brick suppliers */
  sizes = [
    { inches: '9 × 4 × 3 in.', mm: '228 × 101 × 76 mm', name: 'Standard wire-cut', common: true },
    { inches: '9 × 3 × 2 in.', mm: '–', name: 'Exposed / chamber', common: true },
    { inches: '12 × 6 × 4 in.', mm: '–', name: 'Large format', common: false },
    { inches: '190 × 90 × 90 mm', mm: '190 × 90 × 90 mm', name: 'Metric solid', common: true },
    { inches: '230 × 110 × 75 mm', mm: '230 × 110 × 75 mm', name: 'Perforated / solid', common: false }
  ];
}
