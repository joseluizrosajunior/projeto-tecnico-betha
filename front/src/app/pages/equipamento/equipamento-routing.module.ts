import { EquipamentoFormComponent } from './equipamento-form/equipamento-form.component';
import { EquipamentoListComponent } from './equipamento-list/equipamento-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: EquipamentoListComponent},
  {path: 'new', component: EquipamentoFormComponent},
  {path: ':id/edit', component: EquipamentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentoRoutingModule { }
