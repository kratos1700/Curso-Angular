import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import type { SearchGifsResponse } from '../interfaces/gifs.interface';
import { Gifs } from '../interfaces/gif.interface.resp';
import { GifMapper } from '../mapper/gifs.mapper';

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
  trendingGifsLoading = signal<boolean>(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<SearchGifsResponse>(`${environment.servicioURL}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit:20
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
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false); // Actualizamos el estado de carga a false una vez que los GIFs se han cargado
      // Aquí podrías agregar más lógica para manejar errores o realizar acciones adicionales
      // con los GIFs obtenidos, como almacenarlos en un servicio o mostrarlos en la interfaz de usuario
      // Por ejemplo, podrías imprimir los GIFs en la consola para verificar que se han cargado correctamente
      console.log(gifs);


    });

  }


}
