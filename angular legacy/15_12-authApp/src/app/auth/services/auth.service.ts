import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { AuthResponse, RegistroResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  // variable para guardar el usuario en la app
  private _usuario!: Usuario;
  // getter para retornar el usuario
  get usuario() {
    return this._usuario;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { email, password }
    // retornamos el observable para suscribirnos
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          // al recibir la respuesta si es ok, guardamos los datos del usuario
          if (resp.ok) {
            // guardamos el token al localstorage
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              nombre: resp.nombre!,
              email:resp.email!,
              uid: resp.uid!
              
            }
          }
        }),
        // modificamos las respuesta
        map(resp => resp.ok),
        // catchError(err=> of(false))// transformamos el false valor booleano a un observable con of()
        catchError(err => of(err.error.msg))// transformamos el false valor booleano a un observable con of()
      )

  }





  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    // creamos los headers para la peticion 
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')

    // modificamos la respueta para que retorne un booleano
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!)
          this._usuario = {
            nombre: resp.nombre!,
            uid: resp.uid!,
            email:resp.email!
          }

          return resp.ok
        }),
        catchError(err => of(false))
      )
  }

  logout(){
    localStorage.clear();
  }



  registro( nombre:string, email:string, password:string){


    const url = `${this.baseUrl}/auth/new`;
    const body = { nombre,email, password }
    // retornamos el observable para suscribirnos
    return this.http.post<RegistroResponse>(url, body)
      .pipe(
        tap(resp => {
          // al recibir la respuesta si es ok, guardamos los datos del usuario
          if (resp.ok) {
            // guardamos el token al localstorage
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              nombre: resp.nombre!,
              uid: resp.uid!,
              email:resp.email!
             
            }
          }
        }),
        // modificamos las respuesta
        map(resp => resp.ok),
        // catchError(err=> of(false))// transformamos el false valor booleano a un observable con of()
        catchError(err => of(err.error.msg))// transformamos el false valor booleano a un observable con of()
      )



  }


}
