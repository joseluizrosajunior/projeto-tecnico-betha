import { Router } from '@angular/router';
import { UsuarioService } from './../pages/usuario/shared/usuario.service';
import { Usuario } from './../pages/usuario/shared/usuario.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private email: string;
  private senha: string;
  private msg: string;


  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
    this.router.navigate(['/']);
    
  }

  logar(){
    this.usuarioService.getByEmail(this.email).subscribe(
      dados => this.usuario = dados || this.usuario,
      error=>console.log(error),
      ()=>{
        this.realizarLogin();
      }
      );
    
  }

  realizarLogin(){
    console.log('realizarLogin()')
    if (this.authService.fazerLogin(this.email, this.senha, this.usuario)){
      this.msg = "Login realizado com sucesso!";
      

    }else{
      this.msg = "Falha ao realizar login.";
      this.email = "";
      this.senha="";
    }
  }
}
