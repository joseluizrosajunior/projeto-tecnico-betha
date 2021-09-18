import { PessoaService } from './../shared/pessoa.service';
import { Pessoa } from './../shared/pessoa.model';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  pessoaNew: Pessoa = new Pessoa();

  novo: Boolean;
  
  selectedId: string = 'novo';

  constructor(
    private pessoaService: PessoaService,
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
      this.pessoaService.getById(this.selectedId).subscribe(dados => this.pessoa = dados);
    }
  }

  salvarPessoa(){
    this.pessoaService.create(this.pessoa).subscribe(
      dados => this.pessoaNew = dados,
      ()=>{},
      ()=>{this.router.navigate(['/pessoas'])}
      );
    this.pessoa = new Pessoa();
    
  }

  private getAcaoSelecionada(){
    this.novo = this.selectedId == "novo";
  }

}
