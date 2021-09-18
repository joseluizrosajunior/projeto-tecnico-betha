import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarioNew: Usuario = new Usuario();

  novo: Boolean;
  
  selectedId: string = 'novo';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedId = params.get('id') || "novo";
      }
    )
    this.getAcaoSelecionada();

    if (!this.novo){
      this.usuarioService.getById(this.selectedId).subscribe(dados => this.usuario = dados);
    }
  }

  salvarUsuario(){
    this.usuarioService.create(this.usuario).subscribe(
      dados => this.usuarioNew = dados,
      ()=>{},
      ()=>{this.router.navigate(['/usuarios'])}
    );
    this.usuario = new Usuario();
    
  }

  private getAcaoSelecionada(){
    this.novo = this.selectedId == "novo";
  }

}
