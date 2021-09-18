import { StatusFormComponent } from './status-form/status-form.component';
import { StatusListComponent } from './status-list/status-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: StatusListComponent},
  {path: 'new', component: StatusFormComponent},
  {path: ':id/edit', component: StatusFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
