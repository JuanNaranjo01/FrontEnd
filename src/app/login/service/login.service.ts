import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private apiUrl = 'http://localhost:8082'; //cambiar #ip antonio

    constructor(private http: HttpClient) {}

    login(credentials: any): Observable<any> {
        // Define el encabezado que incluye el tipo de contenido
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            withCredentials: true,
        };

        // Realiza la lógica de autenticación aquí
        return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials, httpOptions).pipe(
            map(response => response.token)
        );
    }
}
