import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'; // toSingal sirve para convertir un observable en una señal reactiva
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { Gifs } from '../../interfaces/gif.interface.resp';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-history',
  imports: [GifListComponent],
  templateUrl: './gifs-history.component.html',

})
export default class GifsHistoryComponent {
  searchService = inject(GifsService);



  // Inyectamos ActivatedRoute para acceder a los parámetros de la ruta
  // Esto nos permitirá obtener el historial de búsqueda de GIFs desde la URL
  // y utilizarlo en nuestro componente para mostrar los resultados
  private activatedRoute = inject(ActivatedRoute);
  query = toSignal(

    inject(ActivatedRoute).params.pipe(
      // Utilizamos 'toSignal' para convertir el observable de parámetros en una señal reactiva
      // Esto nos permite reaccionar a los cambios en los parámetros de la ruta
      map(params => params['query']))
  );

  gifsByKey = computed(()=> {
    return this.searchService.getGifsFromHistory(this.query());

  })



}


