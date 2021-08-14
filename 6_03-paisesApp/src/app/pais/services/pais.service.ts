import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string='https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

// funcion para retornar el arreglo de paises a buscar.
buscarPais(termino:string): Observable<Country[]> {
  // url para realizar la peticion get a la api
  const url=`${this.apiUrl}/name/${termino}`;

  //realizamos la peticion, no nos suscribimos, lo retornamos
  return  this.http.get<Country[]>(url);
}


// funcion para retornar el arreglo de capitales a buscar.
buscarCapital(termino:string): Observable<Country[]> {
  // url para realizar la peticion get a la api
  const url=`${this.apiUrl}/capital/${termino}`;

  //realizamos la peticion, no nos suscribimos, lo retornamos
  return  this.http.get<Country[]>(url);
}



// funcion para retornar el pais por codigo del url.
getPaisPorCodigo(codigoPais:string): Observable<Country> {
  // url para realizar la peticion get a la api
  const url=`${this.apiUrl}/alpha/${codigoPais}`;

  //realizamos la peticion, no nos suscribimos, lo retornamos
  return  this.http.get<Country>(url);
}


}
