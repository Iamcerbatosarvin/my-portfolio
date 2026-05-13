import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  photo = '/profile-pic.png';
  summary = `Junior Software Developer with experience in application maintenance, system enhancement, and legacy system support. Proficient in C#, Pascal, and .NET with hands-on experience using Visual Studio, GitHub, Oracle, and PostgreSQL. Skilled in troubleshooting, debugging, and improving system functionality. Passionate about continuous learning and building efficient software solutions.`;

  skills = [
    'C#',
    'Pascal',
    '.NET Framework',
    'Oracle',
    'PostgreSQL',
    'Visual Studio',
    'GitHub',
    'Application Maintenance',
    'System Enhancement',
    'Debugging',
    'Troubleshooting',
    'Problem Solving',
    'Team Collaboration',
    'Technical Documentation',
  ];

  experience = [
    {
      company: 'Macrin PH, Inc.',
      dates: 'January 2024 - Present',
      title: 'Junior Software Developer',
      bullets: [
        'Enhanced Makati City Government systems with C# and .NET Framework.',
        'Maintained Delphi/Pascal legacy revenue applications for stable operations.',
        'Reduced downtime by diagnosing and resolving system issues quickly.',
        'Improved documentation with incident reports and user manuals.',
      ],
    },
    {
      company: 'Ionics EMS Inc.',
      dates: 'July 2023 – January 2024',
      title: 'Process Engineer I',
      bullets: [
        'Optimized manufacturing workflows to improve production efficiency.',
        'Programmed AOI and SPI inspection systems for reliable quality control.',
        'Designed production machine prototypes using SketchUp.',
      ],
    },
  ];

  education = {
    school: 'Laguna State Polytechnic University',
    degree: 'Bs Computer Engineering',
    dates: 'August 2019 - July 2023',
    gpa: '1.59',
    scholar: 'DOST Scholar',
    coursework: [
      'Software Development',
      'Database Management Systems',
      'Algorithms and Data Structures',
      'Computer Networks',
    ],
  };

  certifications = ['Civil Service Eligible (Professional)'];
}
