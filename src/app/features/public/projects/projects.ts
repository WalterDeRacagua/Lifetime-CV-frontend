import { Component, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Chip } from 'primeng/chip';
import { Dialog } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [Button, Chip, Dialog, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  visible = signal(false);
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      id: 1,
      name: 'Lifetime CV',
      description: 'CV dinámico con panel admin',
      fullDescription:
        'Aplicación completa de CV dinámico con panel de administración. Permite gestionar experiencias, proyectos y skills desde un dashboard. Autenticación JWT, sistema de roles y API REST completa.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'PrimeNG'],
      imageUrl: 'https://placehold.co/800x600/3b82f6/white?text=Lifetime+CV',
      demoUrl: 'https://lifetime-cv.vercel.app',
      githubUrl: 'https://github.com/user/lifetime-cv',
      featured: true,
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      description: 'Tienda online completa',
      fullDescription:
        'Plataforma de comercio electrónico con carrito de compras, pasarela de pago Stripe, gestión de inventario y panel de administración. Sistema de reseñas y valoraciones.',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
      imageUrl: 'https://placehold.co/600x400/10b981/white?text=E-commerce',
      githubUrl: 'https://github.com/user/ecommerce',
      featured: false,
    },
    {
      id: 3,
      name: 'Task Manager',
      description: 'Gestor de tareas colaborativo',
      fullDescription:
        'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real usando WebSockets, notificaciones push y sincronización multi-dispositivo.',
      technologies: ['Vue', 'Firebase', 'Tailwind'],
      imageUrl: 'https://placehold.co/600x400/f59e0b/white?text=Task+Manager',
      demoUrl: 'https://task-manager-demo.com',
      featured: false,
    },
    {
      id: 4,
      name: 'Weather App',
      description: 'Pronóstico del tiempo',
      fullDescription:
        'Aplicación del clima con datos en tiempo real, mapas interactivos, alertas meteorológicas y pronósticos extendidos de 7 días.',
      technologies: ['Angular', 'OpenWeather API'],
      imageUrl: 'https://placehold.co/600x400/06b6d4/white?text=Weather+App',
      demoUrl: 'https://weather-app-demo.com',
      featured: false,
    },
    {
      id: 5,
      name: 'Chat App',
      description: 'Mensajería instantánea',
      fullDescription:
        'Aplicación de chat en tiempo real con salas privadas, mensajes multimedia, estado de lectura y notificaciones. Encriptación end-to-end.',
      technologies: ['Socket.io', 'Node.js', 'React'],
      imageUrl: 'https://placehold.co/600x400/8b5cf6/white?text=Chat+App',
      githubUrl: 'https://github.com/user/chat-app',
      featured: false,
    },
  ];

  openDialog(project: Project): void {
    this.selectedProject.set(project);
    this.visible.set(true);
  }

  closeDialog(): void {
    this.visible.set(false);
  }
}
