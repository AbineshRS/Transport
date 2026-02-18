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
    },
    {
      q: 'Do you provide full-load and part-load transport?',
      a: 'Yes. We provide both full-load and part-load transport based on your site requirement. This helps small and large projects control cost while getting timely delivery.'
    },
    {
      q: 'Can you transport M sand, P sand and blue metal with bricks?',
      a: 'Yes, we transport bricks, M sand, P sand and blue metal. You can book one material or combine loads based on route and vehicle availability.'
    },
    {
      q: 'How quickly can you dispatch after booking confirmation?',
      a: 'Dispatch timing depends on pickup location, load readiness and route demand. In most cases we provide a quick schedule update after booking confirmation.'
    },
    {
      q: 'Which cities do you commonly deliver to?',
      a: 'Common delivery routes include Chennai, Coimbatore, Madurai, Trichy, Bangalore, Kochi and nearby regions across South India.'
    },
    {
      q: 'How do you reduce brick damage during transport?',
      a: 'We follow controlled stacking, careful loading and route-aware handling practices. This helps reduce breakage risk and improve delivery quality at site.'
    }
  ];
  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
