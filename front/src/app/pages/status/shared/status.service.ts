import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Status } from './status.model';
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private apiPath: string = "/api/status"

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<any[]>(this.apiPath);
  }

  initStatus(){
    return this.http.get(this.apiPath+'/init');
  }

getAllPersonalizado(){
  return this.http.get<any[]>(this.apiPath+'/p/true');
}


create(status: Status): Observable<Status>{
  return this.http.post(this.apiPath, status).pipe(
    catchError(this.handleError),
    map(this.jsonDataOneStatus)
  )
}

getById(id:String): Observable<Status>{
  return this.http.get(this.apiPath+'/'+id)
  .pipe(
    map(this.jsonDataOneStatus),
    map(this.jsonDataOneStatus)
  );
}

deleteStatus(id:String): Observable<any>{
    return this.http.delete(this.apiPath+'/'+id);
}

//private methods

private jsonDataToStatus(jsonData: any[]): Status[]{
  const st: Status[] = [];
  jsonData.forEach(item => st.push(item as Status));
  return st;
}

private jsonDataOneStatus(jsonData:any): Status{
  return jsonData as Status;
}

private handleError(error:any): Observable<any>{
  console.log("ERRO NA REQUISIÇÃO -> ", error);
  return throwError(error);

}

}
