import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Coordinador} from "../model/coordinador";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {
  private baseUrl: string="http://18.191.74.195:8082/api/v1/user-service"

  constructor(private httpClient: HttpClient) {

  }

  getCoordinadores():Observable<Coordinador[]>{
    return  this.httpClient.get<Coordinador[]>(this.baseUrl+"/coordinador")

  }
  getCoordinador(idCoordinador: number ): Observable<Coordinador>{
    return this.httpClient.get<Coordinador>(this.baseUrl + '/coordinador/'+idCoordinador);
  }


  crearCoordinador(coordinador: Coordinador):Observable<Coordinador> {
    return this.httpClient.post<Coordinador>(this.baseUrl+"/coordinador", coordinador);

  }
  borrarCoordinador(idCoordinador: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/coordinador/" + idCoordinador);
  }

  editarCoordinador(coordinador: Coordinador): Observable<Coordinador>{
    return this.httpClient.put<Coordinador>(this.baseUrl+"/coordinador"+ coordinador.coordinadorId, coordinador);
  }
}
