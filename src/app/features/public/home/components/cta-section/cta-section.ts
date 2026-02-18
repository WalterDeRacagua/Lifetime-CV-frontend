import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { ScrollReveal } from '../../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-cta-section',
  imports: [Button, ScrollReveal],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  private router = inject(Router);

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
