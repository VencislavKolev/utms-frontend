import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TestRun } from '../testRun';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  testRuns: TestRun[] = [];
  testRun: any;
  message: string = '';
  headers: string[] = ['runForProject', 'status'];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getProject(this.route.snapshot.paramMap.get('id'));
    //this.getTestRuns();
    //this.getLastRun();
  }

  getProject(id): void {
    this.projectService.getProjectById(id)
      .subscribe(
        data => {
          this.project = data;
          console.log(data);
          this.getLastRun();
        },
        error => {
          console.log(error);
        });
  }

  // arr.map(person => ({ value: person.id, text: person.name }));
  // getTestRuns(): void {
  //   console.log(2);

  //   this.testRuns = this.project.testRuns.map(xx => {
  //     return <any>
  //       {
  //         id: xx.id,
  //         status: xx.status,
  //         runForProject: xx.runForProject
  //         // and so on
  //       };
  //   });
  //   console.log(1);
  // }

  getLastRun(): void {
    console.log(1);
    let len = this.project.testRuns.length;
    this.testRun = this.project.testRuns[len-1];
    console.log(2);

  }
}


  // projects$: Observable<Project[]> = this.postService.projects$;

  // constructor(private postService: ProjectService) {
  //   this.postService.loadProjects();
  // }

