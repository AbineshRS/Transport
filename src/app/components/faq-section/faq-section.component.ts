import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {
  faqs = [
    {
      q: 'What is bricks transport and how does it work?',
      a: 'Bricks transport means moving red bricks or clay bricks from kilns (Tamil Nadu, Kerala) to your construction site. We handle loading, transit, and delivery so your bricks reach you on time with minimal breakage.'
    },
    {
      q: 'Do you deliver bricks only in Tamil Nadu and Kerala?',
      a: 'We pick up bricks from Tamil Nadu and Kerala kilns and deliver across South India—including Karnataka, Andhra Pradesh, and within TN and Kerala. Tell us your location for a quote.'
    },
    {
      q: 'What types of bricks do you transport?',
      a: 'We mainly transport red bricks (clay bricks) from Tamil Nadu and Kerala—the most common for residential and commercial construction in South India. Bulk and part-load both available.'
    },
    {
      q: 'How do I get a quote for brick delivery?',
      a: 'Call us or email with your pickup area, delivery address, and approximate quantity (number of bricks or truckloads). We reply with a competitive rate and possible schedule.'
    },
    {
      q: 'Why choose Bricks Transport for red brick logistics?',
      a: 'We focus only on bricks transport: direct kiln links, safe handling, on-time delivery, and clear pricing. Ideal for builders, contractors, and developers who need reliable brick supply.'
    }
  ];
  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
