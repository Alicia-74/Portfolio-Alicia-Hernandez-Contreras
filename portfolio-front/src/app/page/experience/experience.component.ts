import { Component } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { EXPERIENCES } from '../../const/experiences.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
  
  getDescripcion(desc: string): string[] {
      if (!desc) return [];
      return desc
        .split('.')
        .map(d => d.trim())
        .filter(d => d.length > 0);
  }
}
