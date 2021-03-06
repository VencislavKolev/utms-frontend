import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { RunComponent } from './run/run.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'projects', pathMatch: 'full', redirectTo: '' },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'projects/:id/runs/:runForProject', component: RunComponent},
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
