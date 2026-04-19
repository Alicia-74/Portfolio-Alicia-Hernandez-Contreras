import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project.component',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: Project[] = [];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
