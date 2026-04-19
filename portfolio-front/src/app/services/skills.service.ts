import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = 'https://portfolio-alicia-hernandez-contreras.onrender.com/api/skills';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl);
  }
}
