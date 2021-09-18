import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiPath: string = "/api/usuario"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.apiPath);
  }

  initUser(){
    return this.http.get(this.apiPath+'/init');
  }
  
  
  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post(this.apiPath, usuario).pipe(
      catchError(this.handleError),
      map(this.jsonDataOneStatus)
    )
  }
  
  getById(id:String): Observable<Usuario>{
    return this.http.get(this.apiPath+'/'+id)
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }

  getByEmail(id:String): Observable<Usuario>{
    console.log('URL API: '+this.apiPath+'/'+id+'/email')
    return this.http.get(this.apiPath+'/'+id+'/email')
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }
  
  deleteUsuario(id:String): Observable<any>{
      return this.http.delete(this.apiPath+'/'+id);
  }
  
  //private methods
    
  private jsonDataOneStatus(jsonData:any): Usuario{
    return jsonData as Usuario;
  }
  
  private handleError(error:any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO -> ", error);
    return throwError(error);
  
  }
}
