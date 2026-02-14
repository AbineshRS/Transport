import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private defaultTitle = 'Bricks Transport | Tamil Nadu & Kerala Red Bricks Delivery';
  private defaultDescription = 'Red brick transport from Tamil Nadu and Kerala to construction sites across South India. Bulk delivery, safe handling, on-time service.';

  setPageSeo(data: SeoData): void {
    if (data.title) {
      this.title.setTitle(data.title);
    }
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
    }
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
    if (data.ogTitle) {
      this.meta.updateTag({ property: 'og:title', content: data.ogTitle });
    }
    if (data.ogDescription) {
      this.meta.updateTag({ property: 'og:description', content: data.ogDescription });
    }
    if (data.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: data.ogImage });
    }
  }

  resetToDefaults(): void {
    this.title.setTitle(this.defaultTitle);
    this.meta.updateTag({ name: 'description', content: this.defaultDescription });
  }
}
