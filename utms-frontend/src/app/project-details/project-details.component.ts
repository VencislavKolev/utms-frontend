import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  testRun: TestRun;
  headers: string[] = ['runForProject', 'status'];

  flag: boolean;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  getLastRun(): void {
    console.log(1);
    this.testRun = this.project.testRuns[0];
    this.flag = this.testRun.status == 'PASSED' ? true : false;
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