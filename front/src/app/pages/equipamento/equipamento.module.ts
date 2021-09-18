import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipamentoRoutingModule } from './equipamento-routing.module';
import { EquipamentoListComponent } from './equipamento-list/equipamento-list.component';
import { EquipamentoFormComponent } from './equipamento-form/equipamento-form.component';

@NgModule({
  declarations: [EquipamentoListComponent, EquipamentoFormComponent],
  imports: [
    CommonModule,
    EquipamentoRoutingModule,
    FormsModule
  ]
})
export class EquipamentoModule { }
