import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Equip } from './equip.model';
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  private apiPath: string = "/api/equipamento"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.apiPath);
  }
  
  
  create(equip: Equip): Observable<Equip>{
    return this.http.post(this.apiPath, equip).pipe(
      catchError(this.handleError),
      map(this.jsonDataOneStatus)
    )
  }
  
  getById(id:String): Observable<Equip>{
    return this.http.get(this.apiPath+'/'+id)
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }

  getBySN(id:String): Observable<Equip>{
    return this.http.get(this.apiPath+'/'+id+'/sn')
    .pipe(
      map(this.jsonDataOneStatus),
      map(this.jsonDataOneStatus)
    );
  }
  
  deleteEquip(id:String): Observable<any>{
      return this.http.delete(this.apiPath+'/'+id);
  }
  
  //private methods
    
  private jsonDataOneStatus(jsonData:any): Equip{
    return jsonData as Equip;
  }
  
  private handleError(error:any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO -> ", error);
    return throwError(error);
  
  }
}
