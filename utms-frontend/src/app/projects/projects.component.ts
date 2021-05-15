import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
// import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  // public projects: Project[];

  //  constructor(private projectService: ProjectService) { }

  // ngOnInit(): void {
  //   this.getProjects();
  // }

  // public getProjects(): void {
  //   this.projectService.getProjects().subscribe(
  //     (response: Project[]) => {
  //       this.projects = response;
  //       console.log(this.projects);

  //     }
  //   )
  // }

  projects$: Observable<Project[]> = this.postService.projects$;

  constructor(private postService: ProjectService) {
    this.postService.loadPosts();
  }

}
