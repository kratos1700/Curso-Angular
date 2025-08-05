import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {


trendingScrollState = signal<number>(0); // Creamos una señal para almacenar el estado del scroll de la página de tendencias



}
