import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../models/formacion';

@Injectable({
  providedIn: 'root',
})
export class FormacionService {

  private apiUrl = 'http://localhost:8080/api/formacion';

  constructor(private http: HttpClient) {}

  getFormacion(): Observable<Formacion[]> {
    return this.http.get<Formacion[]>(this.apiUrl);
  }

}
