import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../../models/skills';
import { SKILLS } from '../../const/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {

  coreSkills: Skills[] = [];
  otherSkills: Skills[] = [];

  private categoryOrder = [
    'Frontend',
    'Frontend Tools',
    'Documentation',
    'Design',
    'Backend',
    'Database',
    'Architecture',
    'Tools',
    'API Documentation',
    'CI/CD',
    'DevOps',
    'Testing',
    'Payments',
    'Code Quality'
  ];

  ngOnInit(): void {
    const sorted = this.sortSkills(SKILLS);

    this.coreSkills = sorted.filter(s => s.type === 'CORE');
    this.otherSkills = sorted.filter(s => s.type === 'OTHER');
  }

  private sortSkills(data: Skills[]): Skills[] {
    return data.sort((a, b) => {
      const indexA = this.getCategoryIndex(a.category);
      const indexB = this.getCategoryIndex(b.category);

      if (indexA !== indexB) {
        return indexA - indexB;
      }

      return a.name.localeCompare(b.name);
    });
  }

  private getCategoryIndex(category: string): number {
    const index = this.categoryOrder.indexOf(category);
    return index === -1 ? 999 : index;
  }
}