import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [PessoaFormComponent, PessoaListComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ]
})
export class PessoaModule { }
