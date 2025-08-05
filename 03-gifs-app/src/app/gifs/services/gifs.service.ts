import { Gifs } from './../interfaces/gif.interface.resp';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import type { SearchGifsResponse } from '../interfaces/gifs.interface';
import { GifMapper } from '../mapper/gifs.mapper';
import { map, tap } from 'rxjs';



const loadFromLocalStorage = () => {
  const historyString = localStorage.getItem('gifs') ?? '{}'; // Obtenemos el historial de búsqueda de GIFs del almacenamiento local
  const gifs = JSON.parse(historyString); // Convertimos la cadena JSON a un objeto JavaScript
  return gifs; // Retornamos el objeto con el historial de búsqueda
}


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Inyectamos el HttpClient para realizar peticiones HTTP
  // Esto nos permitirá cargar los GIFs desde una API o un servidor
  // En este caso, no se ha implementado la lógica de carga de GIFs,
  // pero se puede agregar más adelante según las necesidades del proyecto
  private http = inject(HttpClient);

  // Creamos una señal para almacenar los GIFs de tendencia
  // Las señales son una forma de manejar el estado reactivo en Angular
  // Permiten que los componentes se actualicen automáticamente cuando cambian los datos
  // En este caso, la señal 'trendingGifs' almacenará un array de objetos Gif
  // que representan los GIFs de tendencia obtenidos de la API
  trendingGifs = signal<Gifs[]>([]);
  // Creamos una señal para indicar si los GIFs de tendencia están siendo cargados
  trendingGifsLoading = signal<boolean>(false);


  private trendingPage = signal(0); // Creamos una señal para almacenar la página actual de los GIFs de tendencia


  trendingGifGroup = computed<Gifs[][]>(() => {
    const groups = [];

    // Agrupamos los GIFs de tendencia en grupos de 3
    // Esto es útil para mostrar los GIFs en una cuadrícula o galería
    // Dividimos el array de GIFs en subarrays de 3 elementos cada uno
    // Esto permite que los componentes que muestran los GIFs puedan iterar sobre estos grupos
    // y renderizar los GIFs de manera más eficiente
    // Utilizamos un bucle for para recorrer el array de GIFs de tendencia
    // y crear subarrays de 3 elementos cada uno
    // 'this.trendingGifs()' obtiene el array actual de GIFs de tendencia
    // 'slice(i, i + 3)' crea un subarray que contiene 3 GIFs a partir del índice 'i'
    // 'i += 3' incrementa el índice en 3 para pasar al siguiente grupo de GIFs
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    return groups; // Creamos una señal computada para agrupar los GIFs de tendencia

  }); // Creamos una señal computada para agrupar los GIFs de tendencia


  searchHistory = signal<Record<string, Gifs[]>>(loadFromLocalStorage()); // Creamos una señal para almacenar el historial de búsqueda
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory())); // Creamos una señal computada para obtener las claves del historial de búsqueda


  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
if (this.trendingGifsLoading()) return; // Verificamos si los GIFs de tendencia ya están siendo cargados para evitar múltiples peticiones

    this.trendingGifsLoading.set(true); // Establecemos el estado de carga a true para indicar que estamos cargando los GIFs de tendencia
    // Realizamos una petición HTTP a la API de Giphy para obtener los GIFs de tendencia
    // Utilizamos el servicio HttpClient para hacer la petición GET
    // La URL de la API se construye utilizando la constante 'servicioURL' del entorno y el endpoint '/gifs/trending'
    // Pasamos los parámetros necesarios, como la clave de API y el límite de resultados

    this.http.get<SearchGifsResponse>(`${environment.servicioURL}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 20,
        offset: this.trendingPage() * 20, // Utilizamos la página actual para calcular el offset
      }

    }).subscribe((resp) => { //estamos suscribiéndonos a la respuesta de la petición HTTP
      // Mapeamos los datos recibidos de la API a nuestro modelo Gifs
      // Utilizamos el GifMapper para transformar los datos de la API en un formato más manejable
      // Esto nos permite trabajar con los GIFs de una manera más sencilla en nuestra aplicación
      // Almacena los GIFs mapeados en la señal 'trendingGifs'
      // Esto actualizará automáticamente cualquier componente que esté suscrito a esta señal
      // y mostrará los GIFs de tendencia en la interfaz de usuario
      // 'resp.data' contiene los datos de los GIFs obtenidos de la API
      // 'GifMapper.mapGiphyItemsToGifArray' transforma estos datos en un array de objetos Gifs
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
     // this.trendingGifs.set(gifs); // Actualizamos la señal 'trendingGifs' con los GIFs obtenidos de la API

     this.trendingGifs.update(currentGifs => [
        ...currentGifs, // Mantenemos los GIFs actuales y agregamos los nuevos GIFs obtenidos
        ...gifs // Agregamos los nuevos GIFs a los GIFs actuales, manteniendo los anteriores
     ]);

this.trendingPage.update(page => page + 1); // Incrementamos la página actual para la próxima carga de GIFs

this.trendingGifsLoading.set(false); // Actualizamos el estado de carga a false una vez que los GIFs se han cargado
      // Aquí podrías agregar más lógica para manejar errores o realizar acciones adicionales
      // con los GIFs obtenidos, como almacenarlos en un servicio o mostrarlos en la interfaz de usuario
      // Por ejemplo, podrías imprimir los GIFs en la consola para verificar que se han cargado correctamente
      console.log(gifs);


    });

  }


  searchGifs(query: string) {

    return this.http.get<SearchGifsResponse>(`${environment.servicioURL}/gifs/search`, {
      params: {
        api_key: environment.apiKey,
        limit: 50,
        q: query
      }
    }

    ).pipe( // Utilizamos el operador 'pipe' para encadenar operadores de transformación
      // Mapeamos la respuesta de la API para obtener solo los datos de los GIFs
      // 'resp.data' contiene los datos de los GIFs obtenidos de la API
      // 'GifMapper.mapGiphyItemsToGifArray' transforma estos datos en un array de objetos Gifs
      // Esto nos permite trabajar con los GIFs de una manera más sencilla en nuestra aplicación
      map(({ data }) => data),
      map((gifs) => GifMapper.mapGiphyItemsToGifArray(gifs)),
      tap((gifs) => {
        // Almacenamos los GIFs obtenidos de la búsqueda en el historial de búsqueda
        // 'this.searchHistory()' obtiene el historial actual de búsqueda
        this.searchHistory.update(history => (
          {
            ...history,
            [query.toLocaleLowerCase()]: gifs // Almacenamos los GIFs bajo la clave de la consulta de búsqueda


          }))

      })

    );
  }


  getGifsFromHistory(query: string) {

    return this.searchHistory()[query] ?? [];

  }

  saveGifsToLocalStorage = effect(() => {

    const historystring = JSON.stringify(this.searchHistory()); // Convertimos el historial de búsqueda a una cadena JSON
    localStorage.setItem('gifs', historystring);
  });


}
