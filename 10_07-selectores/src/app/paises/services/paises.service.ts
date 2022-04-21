import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  //variable de la url para la peticion http
  private baseUrl: string = 'https://restcountries.com/v2'
  // getter para obtener las _regiones
  get regiones(): string[] {
    //desestructuramos para no modificar la privada 
    return [...this._regiones];
  }


  constructor(private http: HttpClient) { }



  //funcion para recibir la peticion de la region y obtener los paises, devuelve un observable de paises
  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {

    const url: string = `${this.baseUrl}/region/${region}?fields=name,alpha3Code`
    // retornamos un observable de un arreglo de paises
    return this.http.get<PaisSmall[]>(url);
  }

  //funcion para obtener paises por codigo, el observable emite un pais o null
  getPaisesPorCodigo(codigo: string): Observable<Pais | null> {
   // si no es un codigo valido
    if (!codigo) {
      //of nos permite devolver un observable
      return of(null)
    }

    const url: string = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url)

  }
}
