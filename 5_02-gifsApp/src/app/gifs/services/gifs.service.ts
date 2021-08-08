import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'kiQrrETrIwSjV2yDDSIMNJH67R94AyFT';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  // get historial
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  //funcion de buscar gifs-page
  buscarGifs(query: string = '') {
    //convertimos a minuscula y sin espacios la busqueda
    query = query.trim().toLocaleLowerCase();

    // si el arreglo no esta el items de la busqueda o añadimos
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      // mostraremos solo los 10 primeros elementos del arreglo
      this._historial = this._historial.splice(0, 10);
    }

    //hacemos la peticion a la API de gifs
    this.http
      .get<SearchGifsResponse>(
        `http://api.giphy.com/v1/gifs/search?api_key=kiQrrETrIwSjV2yDDSIMNJH67R94AyFT&q=${query}&limit=10`
      )

      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
    console.log(this._historial);
  }
}
