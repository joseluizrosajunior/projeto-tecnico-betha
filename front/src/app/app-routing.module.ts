import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'status', loadChildren: './pages/status/status.module#StatusModule' },
  { path: 'equipamentos', loadChildren: './pages/equipamento/equipamento.module#EquipamentoModule' },
  { path: 'usuarios', loadChildren: './pages/usuario/usuario.module#UsuarioModule' },
  { path: 'chamados', loadChildren: './pages/chamado/chamado.module#ChamadoModule' },
  { path: 'pessoas', loadChildren: './pages/pessoa/pessoa.module#PessoaModule' },
  {path: 'login', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
