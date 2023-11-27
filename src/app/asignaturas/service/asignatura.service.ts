import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Asignatura} from "../model/asignatura";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private baseUrl: string = "http://18.224.58.22/api/asignatura-service"


  constructor(private httpClient: HttpClient) {

  }

  getAsignaturas(): Observable<Asignatura[]>{
    return this.httpClient.get<Asignatura[]>(this.baseUrl+"/asignaturas");
  }

  crearAsignatura(asignaturas: Asignatura): Observable<Asignatura> {
    return this.httpClient.post<Asignatura>(this.baseUrl+"/asignatura", asignaturas);
  }


  borrarAsignatura(idAsignatura: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/asignatura/" + idAsignatura)
  }

  editarAsignatura(idAsignatura: number, asignatura: Asignatura): Observable<Asignatura> {
    return this.httpClient.put<Asignatura>(`${this.baseUrl}/asignatura/${idAsignatura}`, asignatura);
  }
}
