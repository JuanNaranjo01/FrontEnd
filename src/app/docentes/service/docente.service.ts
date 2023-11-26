import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Docente} from "../model/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private baseUrl: string="http://18.191.74.195:8082/api/v1/user-service"

  constructor(private httpClient: HttpClient) {

  }

  getDocentes():Observable<Docente[]>{
    return  this.httpClient.get<Docente[]>(this.baseUrl+"/docente")

  }
  getDocente(idDocente: number ): Observable<Docente>{
    return this.httpClient.get<Docente>(this.baseUrl + '/docente/'+idDocente);
  }


  crearDocente(docente: Docente):Observable<Docente> {
    return this.httpClient.post<Docente>(this.baseUrl+"/docente", docente);

  }
  borrarDocente(idDocente: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/docente/" + idDocente);
  }

  editarDocente(docente: Docente): Observable<Docente>{
  return this.httpClient.put<Docente>(this.baseUrl+"/docente"+ docente.docenteId, docente);
  }
}
