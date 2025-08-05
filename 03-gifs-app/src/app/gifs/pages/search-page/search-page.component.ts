import {  Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gif.interface.resp';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',

})
export default class SearchPageComponent {

  searchService = inject(GifsService); // Inyectamos el servicio GifsService para poder usarlo en este componente
  gifs = signal<Gifs[]>([]); // Creamos una señal para almacenar los GIFs obtenidos de la búsqueda

  onSearch(query:string){
    console.log(query);

    this.searchService.searchGifs(query).subscribe((resp) => {
      // Almacenamos los GIFs obtenidos de la búsqueda en la señal 'gifs'
      this.gifs.set(resp);
      console.log(resp); // Imprimimos los datos de los GIFs en la consola para verificar que se han obtenido correctamente
    });
  }





}


