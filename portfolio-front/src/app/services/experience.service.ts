import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

  private apiUrl = 'https://portfolio-alicia-hernandez-contreras.onrender.com/api/experiences';

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

}
