import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiPath: string = "/api/pessoa"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.apiPath);
  }
  
  
  create(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post(this.apiPath, pessoa).pipe(
      catchError(this.handleError),
      map(this.jsonDataOneStatus)
    )
  }
  
  getById(id:String): Observable<Pessoa>{
    return this.http.get(this.apiPath+'/'+id)
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }

  getByCpf(id:String): Observable<Pessoa>{
    return this.http.get(this.apiPath+'/'+id+'/cpf')
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }
  
  deletePessoa(id:String): Observable<any>{
      return this.http.delete(this.apiPath+'/'+id);
  }
  
  //private methods
    
  private jsonDataOneStatus(jsonData:any): Pessoa{
    return jsonData as Pessoa;
  }
  
  private handleError(error:any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO -> ", error);
    return throwError(error);
  
  }
}
