import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import RESTCountry from '../interfaces/res-countries.interfaces';

const URL_API = 'https://restcountries.com/v3.1';
const BY_CAPITAL = 'capital';


@Injectable({
  providedIn: 'root'
})


export class CountryService {


  /* The line `private http = inject(HttpClient);` is using Angular's dependency injection system to
  inject an instance of the `HttpClient` service into the `http` property of the `CountryService`
  class. This allows the `CountryService` class to make HTTP requests using the `HttpClient`
  service. */
  private http = inject(HttpClient);


  searchByCapital(query: string){
    query = query.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(`${URL_API}/${BY_CAPITAL}/${query}`);
  }

  constructor() { }






}
