import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadoRoutingModule } from './chamado-routing.module';
import { ChamadoListComponent } from './chamado-list/chamado-list.component';
import { ChamadoFormComponent } from './chamado-form/chamado-form.component';
import { ChamadoDetailComponent } from './chamado-detail/chamado-detail.component';

@NgModule({
  declarations: [ChamadoListComponent, ChamadoFormComponent, ChamadoDetailComponent],
  imports: [
    CommonModule,
    ChamadoRoutingModule,
    FormsModule
  ]
})
export class ChamadoModule { }
