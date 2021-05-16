import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TestRunDetail } from '../testRunDetail';
@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {

  run: TestRunDetail

  projectId: string
  runId: string

  treeControl = new NestedTreeControl<any>(node => node.testSuites);
  dataSource = new MatTreeNestedDataSource<any>()

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.runId = this.route.snapshot.paramMap.get('runForProject');

    this.getRunDetails(this.projectId, this.runId);
  }

  getRunDetails(projectId, runId): void {
    this.projectService.loadTestRun(projectId, runId)
      .subscribe(
        data => {
          this.run = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
