import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './page/skills/skills.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { FormacionComponent } from './page/formacion/formacion.component';

@Component({
  selector: 'app-root',
  imports: [SkillsComponent, ExperienceComponent, FormacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-front');
}
