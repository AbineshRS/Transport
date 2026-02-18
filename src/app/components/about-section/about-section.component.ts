import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

/** Fallback brick-pattern SVG when brick images fail to load. */
const BRICK_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
      '<defs><pattern id="b" width="80" height="40" patternUnits="userSpaceOnUse">' +
        '<rect width="76" height="36" x="2" y="2" fill="%238B4513" rx="1"/>' +
        '<rect width="76" height="36" x="42" y="22" fill="%23A0522D" rx="1"/>' +
      '</pattern></defs>' +
      '<rect width="100%25" height="100%25" fill="%233C2D26"/>' +
      '<rect width="100%25" height="100%25" fill="url(%23b)" opacity="0.9"/>' +
    '</svg>'
  );

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  readonly brickPlaceholder = BRICK_PLACEHOLDER;

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && img.src !== this.brickPlaceholder) {
      img.src = this.brickPlaceholder;
      img.alt = 'Brick image placeholder';
    }
  }
}
