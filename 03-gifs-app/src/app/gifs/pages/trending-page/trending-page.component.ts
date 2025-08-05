import {  AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from '../../services/scroll-state.service';






@Component({
  selector: 'app-trending-page',
 // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',

})
export default class TrendingPageComponent implements AfterViewInit{



//gifs = imageURLs;

gifService = inject(GifsService)
ScrollStateService = inject(ScrollStateService);

// Utilizamos 'viewChild' para obtener una referencia al elemento del DOM
// que contiene los GIFs de tendencia. Esto nos permitirá manipular el scroll
// y realizar acciones cuando el usuario se desplace por la página.
// 'ElementRef' es un tipo que nos permite acceder a las propiedades del elemento DOM
// 'scrollDivRef' es una referencia al elemento que contiene los GIFs de tendencia
// 'groupDiv' es el nombre del elemento en la plantilla HTML al que estamos haciendo referencia
scrollDivRef = viewChild<ElementRef>('groupDiv');



ngAfterViewInit(): void {
  // Restaurar la posición del scroll al valor guardado en el servicio
  const scrollDiv = this.scrollDivRef()?.nativeElement;
  if (!scrollDiv)  return; // Verificamos si 'scrollDiv' existe antes de continuar


      scrollDiv.scrollTop = this.ScrollStateService.trendingScrollState(); // Establecemos la posición del scroll al valor guardado en el servicio
  // Esto nos permite mantener la posición del scroll incluso si el usuario navega a otra sección
  // y luego regresa a la página de tendencias, mejorando la experiencia del usuario
  // 'this.ScrollStateService.trendingScrollState()' obtiene el valor actual del estado del scroll
  // almacenado en el servicio 'ScrollStateService'
  // 'scrollDiv.scrollTop' establece la posición del scroll en el elemento 'scrollDiv'
  // Esto asegura que el usuario vea los GIFs desde la misma posición donde los dejó

  }







onScroll(event: Event) {
// 'event' es el objeto que contiene información sobre el evento de scroll
// Aquí podríamos implementar lógica para cargar más GIFs cuando el usuario se desplace hacia abajo
// Por ejemplo, podríamos verificar si el usuario ha llegado al final del scroll
// y, si es así, cargar más GIFs de tendencia desde la API o el servicio
// 'event.target' nos da acceso al elemento que ha disparado el evento de scroll
const scrollDiv = this.scrollDivRef()?.nativeElement;

if (!scrollDiv)  return; // Verificamos si 'scrollDiv' existe antes de continuar

const scrollTop = scrollDiv.scrollTop; // 'scrollTop' es la posición actual del scroll desde la parte superior
const scrollHeight = scrollDiv.scrollHeight; // 'scrollHeight' es la altura total del contenido dentro del elemento
const clientHeight = scrollDiv.clientHeight; // 'clientHeight' es la altura visible del elemento

// Comprobamos si el usuario ha llegado al final del scroll
// 'scrollTop + clientHeight' nos da la posición actual del scroll más la altura visible del elemento
// Si esto es mayor o igual que 'scrollHeight', significa que el usuario ha llegado al final del contenido
// Aquí podríamos cargar más GIFs de tendencia si es necesario
// sumamos 300 para que no se cargue inmediatamente al llegar al final
const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
// Si el usuario ha llegado al final del scroll, podemos cargar más GIFs de tendencia
// 'this.gifService.loadTrendingGifs()' es un método que podríamos implementar en el servicio
// para cargar más GIFs de tendencia desde la API o el servidor
// Esto podría incluir lógica para incrementar la página actual y realizar una nueva petición
// a la API para obtener más resultados

this.ScrollStateService.trendingScrollState.set(scrollTop); // Actualizamos el estado del scroll en el servicio
// Esto nos permite mantener el estado del scroll incluso si la página se recarga o se navega a otra sección
// 'this.ScrollStateService.trendingScrollState' es una señal que almacena la posición actual del scroll
// y se puede utilizar en otros componentes o servicios para acceder a esta información

if (isAtBottom) {

  this.gifService.loadTrendingGifs();

}


}
}
