import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = false;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.dark = saved === 'dark' ||
      (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.applyTheme();
  }

  toggleTheme(): void {
    this.dark = !this.dark;
    this.applyTheme();
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
  }

  private applyTheme() {
    const body = document.body;
    if (this.dark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  isDark(): boolean {
    return this.dark;
  }
}
