import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { ScrollReveal } from '../../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-experiences-section',
  imports: [Card, RouterLink, ScrollReveal],
  templateUrl: './experiences-section.html',
  styleUrl: './experiences-section.scss',
})
export class ExperiencesSection {}
