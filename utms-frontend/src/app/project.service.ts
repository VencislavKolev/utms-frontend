import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private apiServerUrl = environment.apiServerUrl;

  // constructor(private http: HttpClient) { }

  // public getProjects(): Observable<any> {
  //   return this.http.get<any>(`${this.apiServerUrl}`);
  // }

  private projects: BehaviorSubject<any> = new BehaviorSubject(null);

  projects$ = this.projects.asObservable();

  constructor(private http: HttpClient) { }

  loadPosts() {
    this.http.get<any[]>(`${this.apiServerUrl}`).subscribe({
      next: (val) => this.projects.next(val)
    });
  }
}
