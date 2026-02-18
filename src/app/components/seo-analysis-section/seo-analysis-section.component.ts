import { Component } from '@angular/core';
import { AnimateInDirective } from '../../directives/animate-in.directive';

@Component({
  selector: 'app-seo-analysis-section',
  standalone: true,
  imports: [AnimateInDirective],
  templateUrl: './seo-analysis-section.component.html',
  styleUrl: './seo-analysis-section.component.css'
})
export class SeoAnalysisSectionComponent {
  readonly scoreCards = [
    { label: 'On-page SEO', value: '92%', note: 'Meta tags, headings, keyword alignment' },
    { label: 'Technical SEO', value: '88%', note: 'Schema, robots, sitemap, canonical setup' },
    { label: 'Local SEO', value: '85%', note: 'Tamil Nadu and Kerala service relevance' },
    { label: 'Content Match', value: '90%', note: 'Bricks and transport intent coverage' }
  ];

  readonly keywordGroups = [
    'bricks transport',
    'bricks delivery',
    'red bricks transport',
    'wire-cut bricks delivery',
    'M sand transport',
    'P sand transport',
    'blue metal transport',
    'Tamil Nadu bricks',
    'Kerala bricks',
    'brick delivery South India',
    'bricks Chennai',
    'bricks Coimbatore',
    'bricks Bangalore',
    'bricks Kochi'
  ];

  readonly actionSteps = [
    'Submit your live domain in Google Search Console and request indexing.',
    'Publish and verify `sitemap.xml` + `robots.txt` on your real domain.',
    'Create and optimize Google Business Profile with service area and photos.',
    'Build backlinks from suppliers, local directories and construction portals.',
    'Add city and blog pages regularly to expand keyword footprint.'
  ];
}
