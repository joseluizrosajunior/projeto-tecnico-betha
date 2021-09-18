import { UsuarioService } from './../../usuario/shared/usuario.service';
import { AppComponent } from './../../../app.component';
import { HistoricoChamado } from './../shared/historico-chamado.model';
import { ID_STATUS_ABERTO, ID_STATUS_FINALIZADO } from './../../../variaveis.globais';
import { StatusService } from './../../status/shared/status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from './../shared/chamado.model';
import { ChamadoService } from './../shared/chamado.service';
import { PessoaService } from './../../pessoa/shared/pessoa.service';
import { Pessoa } from './../../pessoa/shared/pessoa.model';
import { Equip } from './../../equipamento/shared/equip.model';
import { Component, OnInit } from '@angular/core';
import { EquipService } from '../../equipamento/shared/equip.service';
import { delay } from 'rxjs/operators';
import { Status } from '../../status/shared/status.model';
import { Usuario } from '../../usuario/shared/usuario.model';
import { atualizarStatus } from '../shared/funcoes.chamado';

@Component({
  selector: 'app-chamado-form',
  templateUrl: './chamado-form.component.html',
  styleUrls: ['./chamado-form.component.css']
})
export class ChamadoFormComponent implements OnInit {

  historicoList: HistoricoChamado[] = [];

  equipamento: Equip = new Equip();
  equipamentoBanco: Equip = new Equip();
  chamado: Chamado = new Chamado();
  
  historico: HistoricoChamado = new HistoricoChamado();

  cliente: Pessoa = new Pessoa();

  novo: Boolean;

  selectedId: string = 'novo';

  statusIdFinalizado:string = ID_STATUS_FINALIZADO;



  constructor(
    private equipService: EquipService,
    private pessoaService: PessoaService,
    private chamadoService: ChamadoService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router,
    private appC: AppComponent
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedId = params.get('id') || "novo";
      }
    )
    this.getAcaoSelecionada();

    this.chamado.cliente=new Pessoa();
    this.chamado.equipamento = new Equip();
    this.chamado.status = new Status();

    if (!this.novo){
      console.log(this.selectedId);
      this.chamadoService.getById(this.selectedId).subscribe(dados => this.chamado = dados);
      this.getAllHistorico(this.selectedId);
    }else{
      //definido id status aberto
      this.chamado.dataChamado = new Date();
      this.statusService.getById(ID_STATUS_ABERTO).subscribe(dados => this.chamado.status = dados || this.chamado.status);
    }

    

    
  }

  carregarEquipamentoBanco(){
    let sn = this.chamado.equipamento.numeroSerie;
    this.chamado.equipamento = new Equip();
    this.chamado.equipamento.numeroSerie = sn;
    this.equipService.getBySN(sn).subscribe(
      dados => (this.chamado.equipamento = dados || this.chamado.equipamento),
      response => {console.log("GET call in error", response)}
      );
    
    
}

 
  carregarPessoaBanco() {
    let cpf = this.chamado.cliente.cpf;
    this.chamado.cliente = new Pessoa();
    this.chamado.cliente.cpf = cpf;
    this.pessoaService.getByCpf(cpf).subscribe(
      dados => this.chamado.cliente = dados || this.chamado.cliente
    );

  }


  salvarChamadoBanco(){


    this.equipService.create(this.chamado.equipamento).subscribe(
      dados => (this.chamado.equipamento = dados),
      response => {console.log("GET call in error", response);},
      ()=>{
        this.pessoaService.create(this.chamado.cliente).subscribe(
          dados => (this.chamado.cliente = dados),
          response => {console.log("GET call in error", response);},
          ()=>{
            this.chamadoService.create(this.chamado).subscribe(

              dados => this.chamado = dados,
              ()=>{},
              ()=>{
                atualizarStatus(this.chamado, this.appC.usuarioLogado,"CREATE/UPDATE",this.chamadoService);
                this.router.navigate(['/chamados']);
              }
              );
            
          }
          );
      }
      );

    
  }

  private getAllHistorico(id: string){
    this.chamadoService.getHistorico(id).subscribe(dados => this.historicoList = dados);
  }


  private getAcaoSelecionada(){
    this.novo = this.selectedId == "novo";
  }
    
  
}
