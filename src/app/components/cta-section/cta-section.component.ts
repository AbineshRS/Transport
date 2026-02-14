import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css'
})
export class CtaSectionComponent {}
