import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  isMenuOpen = false;
  isDarkMode = false;
  navLinks = [
    { path: '/', label: 'Home', fragment: undefined },
    { path: '/', label: 'Services', fragment: 'services' },
    { path: '/', label: 'About', fragment: 'about' },
    { path: '/', label: 'Products', fragment: 'products' },
    { path: '/', label: 'Process', fragment: 'process' },
    { path: '/', label: 'Brick sizes', fragment: 'brick-sizes' },
    { path: '/', label: 'Reviews', fragment: 'testimonials' },
    { path: '/', label: 'FAQ', fragment: 'faq' },
    { path: '/', label: 'Contact', fragment: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkMode = this.themeService.toggleTheme();
  }
}
