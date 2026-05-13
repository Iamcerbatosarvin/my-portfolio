import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  tags: string[];
  highlight: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: 'macrin',
      name: 'Makati City Government Systems',
      subtitle: 'C# / .NET',
      description: 'Developed and enhanced applications for Makati City Government systems using C# and .NET Framework, improving system functionality and performance.',
      details: [
        'Built forms and reports for citizen services and municipal administration.',
        'Improved system reliability through bug fixes and performance optimization.',
        'Coordinated with stakeholders to gather feature requirements.',
      ],
      tags: ['C#', '.NET', 'Oracle'],
      highlight: 'Government systems modernization for better performance',
    },
    {
      id: 'delphi',
      name: 'Legacy Revenue Systems',
      subtitle: 'Delphi / Pascal',
      description: 'Maintained and supported legacy revenue systems built with Delphi and Pascal, ensuring system stability and continuous operations.',
      details: [
        'Troubleshot legacy code and resolved critical revenue-processing bugs.',
        'Updated documentation for continued system maintenance.',
        'Ensured compatibility with existing production infrastructure.',
      ],
      tags: ['Pascal', 'Delphi', 'PostgreSQL'],
      highlight: 'Legacy revenue system support with high stability',
    },
    {
      id: 'aoi',
      name: 'Inspection Systems Programming',
      subtitle: 'AOI / SPI',
      description: 'Programmed and debugged AOI and SPI inspection systems to ensure accurate quality control in production lines.',
      details: [
        'Created inspection sequences to detect defects and reduce false positives.',
        'Implemented automation to speed up quality validation workflows.',
        'Collaborated with engineering teams to refine inspection rules.',
      ],
      tags: ['Automation', 'Quality Control', 'Debugging'],
      highlight: 'Quality control automation for production lines',
    },
    {
      id: 'prototyping',
      name: 'Production Machine Prototyping',
      subtitle: '3D Design',
      description: 'Designed and prototyped production machines using SketchUp, contributing to faster process improvements.',
      details: [
        'Created machine concepts and 3D prototypes for manufacturing use.',
        'Tested design iterations to improve functionality and ergonomics.',
        'Worked closely with production teams to align on build requirements.',
      ],
      tags: ['SketchUp', 'Prototyping', '3D Design'],
      highlight: 'Rapid prototyping for production machine improvement',
    },
    {
      id: 'portfolio',
      name: 'Portfolio Website',
      subtitle: 'Angular / Tailwind',
      description: 'Built a modern portfolio website using Angular and Tailwind CSS with responsive design and interactive features.',
      details: [
        'Designed a responsive homepage and project showcase.',
        'Implemented navigation, modal dialogs, and smooth hover effects.',
        'Optimized the page for both desktop and mobile experiences.',
      ],
      tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
      highlight: 'Responsive portfolio experience with modern UI',
    },
    {
      id: 'db',
      name: 'Database Management Systems',
      subtitle: 'Oracle / PostgreSQL',
      description: 'Worked with Oracle and PostgreSQL databases for application development and system maintenance.',
      details: [
        'Maintained data schemas and optimized database queries.',
        'Supported data migration and backup operations.',
        'Collaborated with developers to secure database access patterns.',
      ],
      tags: ['Oracle', 'PostgreSQL', 'SQL'],
      highlight: 'Reliable database maintenance and optimization',
    },
  ];

  selectedProject: WritableSignal<Project | null> = signal(null);

  openProject(project: Project) {
    this.selectedProject.set(project);
  }

  closeProject() {
    this.selectedProject.set(null);
  }

  trackProject(index: number, project: Project) {
    return project.id;
  }
}
