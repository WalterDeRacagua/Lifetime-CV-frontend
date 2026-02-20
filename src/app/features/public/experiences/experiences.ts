import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { Card } from 'primeng/card';

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-experiences',
  imports: [Timeline, Card, Button, Tooltip],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  experiences: Experience[] = [
    {
      company: 'Digital55',
      position: 'Junior Developer',
      location: 'Madrid, España',
      startDate: '2022',
      endDate: 'Presente',
      isCurrent: true,
      description:
        'Desarrollo de aplicaciones empresariales con Angular y Node.js. Implementación de arquitecturas escalables y mantenibles. Trabajo en equipo ágil con metodologías Scrum. Participación en code reviews y mentoría de desarrolladores junior.',
      expanded: false,
    },
    {
      company: 'Accenture',
      position: 'Software Engineer',
      location: 'Madrid, España',
      startDate: '2020',
      endDate: '2022',
      isCurrent: false,
      description:
        'Desarrollo full-stack de soluciones web para clientes del sector financiero. Implementación de microservicios con Node.js y Angular. Integración con APIs REST y bases de datos PostgreSQL. Despliegue en AWS.',
      expanded: false,
    },
    {
      company: 'Accenture',
      position: 'Software Engineer',
      location: 'Madrid, España',
      startDate: '2020',
      endDate: '2022',
      isCurrent: false,
      description:
        'Desarrollo full-stack de soluciones web para clientes del sector financiero. Implementación de microservicios con Node.js y Angular. Integración con APIs REST y bases de datos PostgreSQL. Despliegue en AWS.',
      expanded: false,
    },
  ];

  toggleExpand(experience: Experience) {
    experience.expanded = !experience.expanded;
  }
}
