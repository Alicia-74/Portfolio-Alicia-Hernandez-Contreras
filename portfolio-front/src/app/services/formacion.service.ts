import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../models/formacion';

@Injectable({
  providedIn: 'root',
})
export class FormacionService {

  private apiUrl = 'https://portfolio-alicia-hernandez-contreras.onrender.com/api/formacion';

  constructor(private http: HttpClient) {}

  getFormacion(): Observable<Formacion[]> {
    return this.http.get<Formacion[]>(this.apiUrl);
  }

}
