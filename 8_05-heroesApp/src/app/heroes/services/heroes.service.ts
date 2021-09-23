import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  private baseUrl:string = environment.baseUrl; // usamos la variable definida al a environment

  constructor(private http: HttpClient) { }


getHeroes(): Observable<Heroe[]> {
  return this.http.get<Heroe[]>( `${this.baseUrl}/heroes`)
}

getHeroesById(id: string): Observable<Heroe>{
  return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
}

getSugerencias(termino:string): Observable<Heroe[]>{

  return this.http.get<Heroe[]>( `${this.baseUrl}/heroes?q=${termino}&_limit=6`);
}


}
