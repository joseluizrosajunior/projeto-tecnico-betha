import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ]
})
export class UsuarioModule { }
