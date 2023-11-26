import { Injectable } from '@angular/core';
import {Asignatura} from "../model/asignatura";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private baseUrl: string = "http://18.224.58.22/api/asignatura-service"

  constructor(private httpClient: HttpClient) {

  }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.httpClient.get<Asignatura[]>(this.baseUrl+"/asignaturas")

  }
  getAsignatura(idAsignatura: number): Observable<Asignatura> {
    return this.httpClient.get<Asignatura>(this.baseUrl + '/asignatura/' + idAsignatura);
  }


  crearAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.httpClient.post<Asignatura>(this.baseUrl+"/asignatura", asignatura);
  }
  editarAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.httpClient.put<Asignatura>(this.baseUrl+"/asignatura/"+asignatura.codAsignatura, asignatura);
  }

  borrarAsignatura(idAsignatura: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/asignatura/" + idAsignatura);
  }

}
