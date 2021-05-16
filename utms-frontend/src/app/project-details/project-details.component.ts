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

  flag: boolean;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getProject(this.route.snapshot.paramMap.get('id'));
    this.getLastRun();
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
    let length = this.project.testRuns.length;
    this.testRun = this.project.testRuns[0];
    this.flag = this.testRun.status == 'PASSED' ? true : false;
    console.log(2);
  }

  sortByRunId() {
    let runs = this.project.testRuns;
    console.log("Array", runs);
    runs.sort((b, a) => {
      return a.runForProject - b.runForProject;
    });
    console.log("Array Sorted", runs)
  }
}


  // projects$: Observable<Project[]> = this.postService.projects$;

  // constructor(private postService: ProjectService) {
  //   this.postService.loadProjects();
  // }

