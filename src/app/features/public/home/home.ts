import { Component, inject } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { SummarySection } from './components/summary-section/summary-section';
import { ExperiencesSection } from './components/experiences-section/experiences-section';
import { CtaSection } from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, SummarySection, ExperiencesSection, CtaSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
