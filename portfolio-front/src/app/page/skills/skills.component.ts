import { Component, OnInit } from '@angular/core';
import { Skills } from '../../models/skills';
import { SkillsService } from '../../services/skills.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

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

  categoryOrder = ['Frontend','Frontend Tools','Documentation', 'Design', 'Backend', 'DataBase', 'DevOps', 'Testing', 'Payments', 'Code Quality', 'Architecture', 'Tools', 'API Documentation', 'CI/CD'];

  constructor(private skillsService: SkillsService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        console.log('DATA OK:', data);

        this.coreSkills = data
        .filter(s => s.type === 'CORE')
        .sort((a, b) => {
          const indexA = this.categoryOrder.indexOf(a.category);
          const indexB = this.categoryOrder.indexOf(b.category);

          const safeA = indexA === -1 ? 999 : indexA;
          const safeB = indexB === -1 ? 999 : indexB;

          if (safeA !== safeB) {
            return safeA - safeB;
          }

          return a.name.localeCompare(b.name);
        });

      this.otherSkills = data
        .filter(s => s.type === 'OTHER')
        .sort((a, b) => {
          const indexA = this.categoryOrder.indexOf(a.category);
          const indexB = this.categoryOrder.indexOf(b.category);

          const safeA = indexA === -1 ? 999 : indexA;
          const safeB = indexB === -1 ? 999 : indexB;

          if (safeA !== safeB) {
            return safeA - safeB;
          }

          return a.name.localeCompare(b.name);
        });
        this.cd.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }
}