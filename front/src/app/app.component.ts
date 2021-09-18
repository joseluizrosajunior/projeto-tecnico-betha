import { Router } from '@angular/router';
import { UsuarioService } from './pages/usuario/shared/usuario.service';
import { StatusService } from './pages/status/shared/status.service';
import { Usuario } from './pages/usuario/shared/usuario.model';
import { AuthService } from './login-form/auth.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'betha';
  mostrarMenu: boolean = false;
  usuarioLogado: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private statusService: StatusService,
    private usuarioService: UsuarioService,
    private router: Router
    ){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    this.usuarioService.initUser().subscribe();
    this.statusService.initStatus().subscribe();


    this.authService.usuarioLogadoEmitter.subscribe(
      mostrar => this.usuarioLogado = mostrar
    );
  }

  sair(){
    this.mostrarMenu = false;
    this.usuarioLogado = new Usuario();
    this.router.navigate(['/']);
  }

}


