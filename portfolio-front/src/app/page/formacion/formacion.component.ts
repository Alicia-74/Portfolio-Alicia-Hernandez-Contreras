import { Component } from '@angular/core';
import { Formacion } from '../../models/formacion';
import { FormacionService } from '../../services/formacion.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
})
export class FormacionComponent {
  forma: Formacion[] = [];

  constructor(private service: FormacionService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.getFormacion().subscribe(data => {
      console.log('DATOS BBDD 👉', data);
      this.forma = data.sort((a, b) => a.start_Date - b.start_Date);
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
