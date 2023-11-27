import { Injectable } from '@angular/core';
import {Sala} from "../model/sala";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl: String = "https://gist.githubusercontent.com/jonathanColorado/748fb008c821f91adf82ec068cd92618/raw/e150f58456ac3ca3ff194e8e5305f0732bf9fa93/gistfile1.txt";

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Metodo que obtiene los salas
   * @returns Observable<Sala[]> Lista de salas
   */
  getSalas(): Observable<Sala[]> {
    return this.httpClient.get<Sala[]>(this.baseUrl + "/salaes")
      .pipe(
        map((result: any) => {
          console.log(result._embedded.salaes);
          return result._embedded.salaes;
        }));
  }

  /**
   * Metodo que obtiene un curso
   */
  getSala(idSala: number): Observable<Sala> {
    return this.httpClient.get<Sala>(this.baseUrl + '/salaes/' + idSala);
  }

  /**
   * Metodo que crea un curso
   * @param sala
   */
  crearSala(sala: Sala): Observable<Sala> {
    return this.httpClient.post<Sala>(this.baseUrl + "/salaes", sala);
  }

  /**
   * Metodo que edita un curso
   * @param sala
   */
  editarSala(sala: Sala): Observable<Sala> {
    return this.httpClient.put<Sala>(this.baseUrl + "/salaes/" + sala.id, sala);
  }

  /**
   * Metodo que elimina un curso
   */
  borrarSala(idSala: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/salaes/" + idSala);
  }
}

