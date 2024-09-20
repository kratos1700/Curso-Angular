import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private servicioURL: string='https://api.giphy.com/v1/gifs'
  private apiKey: string = 'kiQrrETrIwSjV2yDDSIMNJH67R94AyFT';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  // get historial
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

if(localStorage.getItem('historial')){
  this._historial = JSON.parse(localStorage.getItem('historial')!) // convertimos el json del local storage a un objeto
}

  }

  //funcion de buscar gifs-page
  buscarGifs(query: string = '') {
    //convertimos a minuscula y sin espacios la busqueda
    query = query.trim().toLocaleLowerCase();

    // si el arreglo no esta el items de la busqueda o añadimos
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      // mostraremos solo los 10 primeros elementos del arreglo
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial',JSON.stringify(this._historial)) // GUARDAMOS EL HISTORIAL AL LOCALSTORAGE
    }

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','15')
    .set('q',query);

    //hacemos la peticion a la API de gifs
    this.http
      .get<SearchGifsResponse>(
        `${this.servicioURL}/search`,{params}
      )

      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
    console.log(this._historial);
  }
}
