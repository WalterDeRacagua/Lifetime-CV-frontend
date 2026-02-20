import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIChart } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Tooltip } from 'primeng/tooltip';

interface Skill {
  name: string;
  level: number;
  years: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, AccordionModule, UIChart, Rating, FormsModule, Tooltip],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  isMobile = signal(false);

  skills: Skill[] = [
    { name: 'Angular', level: 5, years: 5, category: 'Frontend' },
    { name: 'React', level: 4, years: 3, category: 'Frontend' },
    { name: 'TypeScript', level: 5, years: 4, category: 'Frontend' },
    { name: 'Node.js', level: 5, years: 4, category: 'Backend' },
    { name: 'Express', level: 4, years: 3, category: 'Backend' },
    { name: 'NestJS', level: 4, years: 2, category: 'Backend' },
    { name: 'PostgreSQL', level: 4, years: 4, category: 'Database' },
    { name: 'MongoDB', level: 3, years: 2, category: 'Database' },
    { name: 'Docker', level: 4, years: 3, category: 'DevOps' },
    { name: 'Git', level: 5, years: 5, category: 'DevOps' },
    { name: 'Liderazgo', level: 1, years: 1, category: 'Personal' },
    { name: 'Alegría', level: 1, years: 1, category: 'Personal' },
    { name: 'Tranquilidad', level: 1, years: 1, category: 'Personal' },
    { name: 'Comunicación', level: 2, years: 1, category: 'Personal' },
  ];

  radarData: unknown;
  radarOptions: unknown;
  groupedSkills: Record<string, Skill[]> = {};
  categories: string[] = [];

  constructor() {
    this.checkScreenSize();
    this.prepareRadarData();
    this.groupSkillsByCategory();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth < 768);
  }

  prepareRadarData() {
    const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Personal'];
    const data = categories.map((cat) => {
      const categorySkills = this.skills.filter((s) => s.category === cat);
      const avgLevel = categorySkills.reduce((sum, s) => sum + s.level, 0) / categorySkills.length;
      return (avgLevel / 5) * 100;
    });

    this.radarData = {
      labels: categories,
      datasets: [
        {
          label: 'Nivel de habilidad (%)',
          data: data,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(59, 130, 246)',
        },
      ],
    };

    this.radarOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
          },
        },
      },
    };
  }

  groupSkillsByCategory() {
    this.groupedSkills = this.skills.reduce(
      (acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>,
    );

    this.categories = Object.keys(this.groupedSkills);
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      Frontend: 'pi-desktop',
      Backend: 'pi-server',
      Database: 'pi-database',
      DevOps: 'pi-cog',
    };
    return icons[category] || 'pi-code';
  }
}
