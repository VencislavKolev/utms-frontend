import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects$: Observable<Project[]> = this.projectService.projects$;

  constructor(private projectService: ProjectService) {
    this.projectService.loadProjects();
  }

}
