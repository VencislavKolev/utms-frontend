import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServerUrl = environment.apiServerUrl;

  private projects: BehaviorSubject<any> = new BehaviorSubject(null);
  projects$ = this.projects.asObservable();

  project: Project

  constructor(private http: HttpClient) { }

  loadProjects() {
    this.http.get<any[]>(`${this.apiServerUrl}`).subscribe({
      next: (val) => this.projects.next(val)
    });
  }
  
  getProjectById(id: number): Observable<Project> {
    return this.http.get<any>(`${this.apiServerUrl}/${id}`);
  }
}
