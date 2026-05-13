import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  isCollapsed = signal(false);
  showMobileMenu = signal(true);

  toggleSidebar() {
    this.isCollapsed.update(val => !val);
  }

  toggleMobileMenu() {
    this.showMobileMenu.update(val => !val);
  }
}