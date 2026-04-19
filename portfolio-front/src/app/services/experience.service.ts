import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

  private apiUrl = 'http://localhost:8080/api/experiences';

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

}
