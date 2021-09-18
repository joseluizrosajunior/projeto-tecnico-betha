import { PessoaService } from './../shared/pessoa.service';
import { Pessoa } from './../shared/pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoaList: Pessoa[] = [];


  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getAllPessoas();
  }

  deletePessoa(id: string){
    if (confirm('deseja excluir?')){
      this.pessoaService.deletePessoa(id).subscribe(
        result => console.log(result),
        err => console.error(err)
        );
      this.getAllPessoas();
    }
  }

  private getAllPessoas(){
    this.pessoaService.getAll().subscribe(dados => this.pessoaList = dados);
  }

}
