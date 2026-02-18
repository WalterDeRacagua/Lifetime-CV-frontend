import { Routes } from '@angular/router';

/**
 * loadComponent() consigue el efecto de LazyLoading de componentes, solo carga el componente cuando el usuario navega a esa ruta
 * --------------------------
 * Todas las rutas dentro de children tendran el prefijo /admin
 */

export const routes: Routes = [
  // Ruta raíz, redirige al home público
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Rutas públicas accesibles
  {
    path: 'home',
    loadComponent: () => import('./features/public/home/home').then((m) => m.Home),
  },
  {
    path: 'experiences',
    loadComponent: () =>
      import('./features/public/experiences/experiences').then((m) => m.Experiences),
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/public/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/public/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/public/contact/contact').then((m) => m.Contact),
  },

  // Rutas privadas accesibles autenticado
  {
    path: 'admin/login',
    loadComponent: () => import('./features/admin/login/login').then((m) => m.Login),
  },
  {
    path: 'admin',
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'experiences',
        loadComponent: () =>
          import('./features/admin/experiences/experiences').then((m) => m.AdminExperiences),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/admin/projects/projects').then((m) => m.AdminProjects),
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/admin/skills/skills').then((m) => m.AdminSkills),
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./features/admin/messages/messages').then((m) => m.AdminMessages),
      },
    ],
  },
  //Error 404
  {
    path: '**',
    redirectTo: 'home',
  },
];
