import { UsuarioService } from './../shared/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioList: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getAllUsuarios();
  }

  deleteUsuario(id: string){
    if (confirm('deseja excluir?')){
      this.usuarioService.deleteUsuario(id).subscribe(
        result => console.log(result),
        err => console.error(err)
        );
      this.getAllUsuarios();
    }
  }

  private getAllUsuarios(){
    this.usuarioService.getAll().subscribe(dados => this.usuarioList = dados);
  }


}
