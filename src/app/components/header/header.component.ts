import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  navLinks = [
    { path: '/', label: 'Home', fragment: undefined },
    { path: '/', label: 'Services', fragment: 'services' },
    { path: '/', label: 'About', fragment: 'about' },
    { path: '/', label: 'Products', fragment: 'products' },
    { path: '/', label: 'Brick sizes', fragment: 'brick-sizes' },
    { path: '/', label: 'FAQ', fragment: 'faq' },
    { path: '/', label: 'Contact', fragment: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
