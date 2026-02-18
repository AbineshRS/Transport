import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { BrickSizesSectionComponent } from '../../components/brick-sizes-section/brick-sizes-section.component';
import { SandSectionComponent } from '../../components/sand-section/sand-section.component';
import { MarketingContentSectionComponent } from '../../components/marketing-content-section/marketing-content-section.component';
import { SeoAnalysisSectionComponent } from '../../components/seo-analysis-section/seo-analysis-section.component';
import { ProcessSectionComponent } from '../../components/process-section/process-section.component';
import { TestimonialsSectionComponent } from '../../components/testimonials-section/testimonials-section.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    SandSectionComponent,
    ProcessSectionComponent,
    MarketingContentSectionComponent,
    SeoAnalysisSectionComponent,
    BrickSizesSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageSeo({
      title: 'Premium Bricks Transport | Red Bricks, M Sand, P Sand & Blue Metal Delivery',
      description:
        'Premium bricks transport service from Tamil Nadu and Kerala to South India. Red bricks, wire-cut bricks, M sand, P sand and blue metal with safe handling and on-time delivery.',
      keywords:
        'bricks transport, red bricks delivery, wire-cut bricks transport, M sand transport, P sand transport, blue metal transport, Tamil Nadu bricks, Kerala bricks, construction material transport',
      ogTitle: 'Premium Bricks Transport in South India',
      ogDescription:
        'Looking for brick or transport services? Get premium delivery support for bricks, M sand, P sand and blue metal with competitive rates.'
    });
  }
}
