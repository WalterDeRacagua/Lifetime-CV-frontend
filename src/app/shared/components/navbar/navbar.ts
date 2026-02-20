import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule, TooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class Navbar {
  private router = inject(Router);
  mobileMenuOpen = signal(false);

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home',
    },
    {
      label: 'Experiencias',
      icon: 'pi pi-briefcase',
      routerLink: '/experiences',
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-folder',
      routerLink: '/projects',
    },
    {
      label: 'Skills',
      icon: 'pi pi-code',
      routerLink: '/skills',
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      routerLink: '/contact',
    },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  goToAdmin() {
    this.router.navigate(['/admin/login']);
    this.closeMobileMenu();
  }
}
