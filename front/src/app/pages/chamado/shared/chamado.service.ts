import { HistoricoChamado } from './historico-chamado.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Chamado } from './chamado.model';
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private apiPath: string = "/api/chamado"
  private apiPathHistorico: string = "/api/historico"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.apiPath);
  }

  getAllByTecByStatus(status: string, tec: string){
    return this.http.get<any[]>(this.apiPath+'/'+status+'/'+tec);
  }
  
  
  create(chamado: Chamado): Observable<Chamado>{
    return this.http.post(this.apiPath, chamado).pipe(
      catchError(this.handleError),
      map(this.jsonDataOneChamado)
    )
  }
  
  getById(id:String): Observable<Chamado>{
    return this.http.get(this.apiPath+'/'+id)
    .pipe(
      map(this.jsonDataOneChamado),
      map(this.jsonDataOneChamado)
    );
  }

  
  
  deleteChamado(id:String): Observable<any>{
      return this.http.delete(this.apiPath+'/'+id);
  }

  //metodos historico

  getHistorico(idChamado:string){
    return this.http.get<any[]>(this.apiPathHistorico+'/'+idChamado);
  }

  gravarHistorico(hc: HistoricoChamado): Observable<HistoricoChamado>{
    return this.http.post(this.apiPathHistorico, hc).pipe(
      catchError(this.handleError),
      map(this.jsonDataOneHist)
    )
  }
  
  //private methods
    
  private jsonDataOneHist(jsonData:any): HistoricoChamado{
    return jsonData as HistoricoChamado;
  }

  private jsonDataOneChamado(jsonData:any): Chamado{
    return jsonData as Chamado;
  }
  
  private handleError(error:any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO -> ", error);
    return throwError(error);
  
  }
}
