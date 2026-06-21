import { Component } from '@angular/core';
import { Formacion } from '../../models/formacion';
import { FormacionService } from '../../services/formacion.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FORMACION } from '../../const/formacion.data';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
})
export class FormacionComponent {
  forma = FORMACION;

  getDescripcion(desc?: string): string[] {
      if (!desc) return [];
      return desc
        .split('.')
        .map(d => d.trim())
        .filter(d => d.length > 0);
  }
}
