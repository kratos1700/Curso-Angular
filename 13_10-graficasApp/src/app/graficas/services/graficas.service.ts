import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {delay, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }


  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica')
  }


  getUsuariosRedesSocialesGrafica(){
    // como es un Observable lo podemos transformar
    return this.getUsuariosRedesSociales()
    .pipe(
      delay(1500),
      map( data=>{
        const labels = Object.keys(data)
        const valores = Object.values(data)
        return { labels, valores}

      })
    )
  }

}
