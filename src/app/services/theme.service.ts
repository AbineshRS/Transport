import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private storageKey = 'transport-theme';
  private darkClass = 'theme-dark';

  initTheme(): void {
    const saved = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;
    this.applyTheme(shouldUseDark);
  }

  toggleTheme(): boolean {
    const next = !this.isDarkMode();
    this.applyTheme(next);
    return next;
  }

  isDarkMode(): boolean {
    return this.document.body.classList.contains(this.darkClass);
  }

  private applyTheme(dark: boolean): void {
    this.document.body.classList.toggle(this.darkClass, dark);
    localStorage.setItem(this.storageKey, dark ? 'dark' : 'light');
  }
}
