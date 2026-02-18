import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Fallback brick-pattern SVG when hero-bricks-only.jpg is missing (e.g. not yet added to public/images). */
const BRICK_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
      '<defs><pattern id="b" width="80" height="40" patternUnits="userSpaceOnUse">' +
        '<rect width="76" height="36" x="2" y="2" fill="%238B4513" rx="1"/>' +
        '<rect width="76" height="36" x="42" y="22" fill="%23A0522D" rx="1"/>' +
      '</pattern></defs>' +
      '<rect width="100%25" height="100%25" fill="%231a1a1a"/>' +
      '<rect width="100%25" height="100%25" fill="url(%23b)" opacity="0.85"/>' +
    '</svg>'
  );

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroBgSrc = '/images/hero-bricks-only.jpg';
  readonly brickPlaceholder = BRICK_PLACEHOLDER;

  onHeroImageError(event: Event): void {
    const el = event.target as HTMLImageElement;
    if (el && el.src !== this.brickPlaceholder) {
      el.src = this.brickPlaceholder;
    }
  }
}
