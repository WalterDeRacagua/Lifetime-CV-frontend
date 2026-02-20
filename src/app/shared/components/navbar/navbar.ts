import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, Button, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);

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

  goToAdmin() {
    this.router.navigate(['/admin/login']);
  }
}
