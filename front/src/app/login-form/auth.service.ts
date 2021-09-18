import { Usuario } from './../pages/usuario/shared/usuario.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioLogadoEmitter = new EventEmitter<Usuario>();

  constructor(private router: Router) { }

  fazerLogin(email: string, senha:string, usuario: Usuario):Boolean{
    console.log(usuario.email);
    console.log(usuario.id);
    if (email === usuario.email &&
    senha===usuario.senha){
      console.log('LOGADO COMO: '+usuario.nome);
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);
      this.usuarioLogadoEmitter.emit(usuario);
      return true;

    }else{
      console.log('Falha ao realizar login');
      this.usuarioAutenticado = false;
      return false;
    }
  }
}
