import { StatusService } from './../../status/shared/status.service';
import { ID_STATUS_FINALIZADO } from './../../../variaveis.globais';
import { HistoricoChamado } from './../shared/historico-chamado.model';
import { Status } from './../../status/shared/status.model';
import { Usuario } from './../../usuario/shared/usuario.model';
import { AppComponent } from './../../../app.component';
import { Chamado } from './../shared/chamado.model';
import { ChamadoService } from './../shared/chamado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../pessoa/shared/pessoa.model';
import { Equip } from '../../equipamento/shared/equip.model';
import { atualizarStatus } from '../shared/funcoes.chamado';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.css']
})
export class ChamadoDetailComponent implements OnInit {

  selectedId: string;
  chamado: Chamado = new Chamado();
  chamadoBanco: Chamado = new Chamado();
  statusList: Status[];
  novoStatus: Status;

  historicoList: HistoricoChamado[] = [];

  historico: HistoricoChamado = new HistoricoChamado();

  usuarioLog: Usuario;

  constructor(
    private route: ActivatedRoute,
    private chamadoService: ChamadoService,
    private appC: AppComponent,
    private statusService: StatusService,
    private router: Router
  ) { }

  ngOnInit() {
    this.chamado.cliente=new Pessoa();
    this.chamado.equipamento = new Equip();
    this.chamado.responsavel = new Usuario();
    this.chamado.status = new Status();

    this.route.paramMap.subscribe(
      params => {
        this.selectedId = params.get('id') || "novo";
      }
    )

    this.usuarioLog = this.appC.usuarioLogado;

    this.chamadoService.getById(this.selectedId).subscribe(
      dados => this.chamado = dados,
      ()=>{},
      ()=>{
        
        this.statusService.getAllPersonalizado().subscribe(dados => this.statusList = dados);
      }
      );
    this.getAllHistorico(this.selectedId);
  }

  atualizarChamado(){
    if(this.novoStatus != undefined){
      this.chamado.status = this.novoStatus;
    }

    this.chamadoService.create(this.chamado).subscribe(
      dados => this.chamado = dados,
      ()=>{},
      ()=>{
        
        this.historico.chamado = this.chamado;
        atualizarStatus(this.chamado, this.appC.usuarioLogado,"UPDATE",this.chamadoService);
        this.router.navigate(['/chamados']);
        
      }
      );

    //implementar navigate
  }

  finalizarChamado(){
    if (confirm("Deseja realmente finalizar este chamado?")){
      if (this.chamado.solucao != undefined){
        this.statusService.getById(ID_STATUS_FINALIZADO).subscribe(
          dados => this.chamado.status = dados || this.chamado.status,
          ()=>{},
          ()=>{
            this.chamadoService.create(this.chamado).subscribe(
              dados => this.chamado = dados,
              err => console.error(err),
              ()=>{
                atualizarStatus(this.chamado,this.appC.usuarioLogado,"CHAMADO FINALIZADO",this.chamadoService);
                this.router.navigate(['/chamados'])
              }
            )
          }
          );
      }else{
        alert("Você precisa informar a solução para o chamado ante de finalizar.")
      }
    }
    
  }

  private getAllHistorico(id: string){
    this.chamadoService.getHistorico(id).subscribe(dados => this.historicoList = dados);
  }

  

}
