import { Component, input } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',

})
export class GifListComponent {

  // Definimos un input para recibir un array de URLs de imágenes
  // Este input es obligatorio y debe ser un array de strings
  // Esto es útil para evitar errores si no se proporciona un valor
  // En caso de que no se proporcione un valor, el componente no se renderizará correctamente
  // y se mostrará un error en la consola
  // Esto es una buena práctica para asegurarnos de que el componente se use correctamente
  // y evitar errores en tiempo de ejecución
  gifs = input.required<string[]>();


 }
