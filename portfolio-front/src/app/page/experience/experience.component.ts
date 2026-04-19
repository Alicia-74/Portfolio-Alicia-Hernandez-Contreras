import { Component } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  constructor(private service: ExperienceService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.getExperiences().subscribe(data => {
      this.experiences = data;
      this.cd.detectChanges();
    });
  }

  getDescripcion(desc: string): string[] {
      if (!desc) return [];
      return desc
        .split('.')
        .map(d => d.trim())
        .filter(d => d.length > 0);
  }
}
