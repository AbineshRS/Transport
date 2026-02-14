import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { BrickSizesSectionComponent } from '../../components/brick-sizes-section/brick-sizes-section.component';
import { SandSectionComponent } from '../../components/sand-section/sand-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    SandSectionComponent,
    BrickSizesSectionComponent,
    FaqSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
