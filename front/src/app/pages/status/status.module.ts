import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusFormComponent } from './status-form/status-form.component';

@NgModule({
  declarations: [StatusListComponent, StatusFormComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    FormsModule
  ]
})
export class StatusModule { }
