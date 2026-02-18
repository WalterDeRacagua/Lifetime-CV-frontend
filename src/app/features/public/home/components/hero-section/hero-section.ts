import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { ScrollReveal } from '../../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-hero-section',
  imports: [Button, ScrollReveal],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private router = inject(Router);

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
