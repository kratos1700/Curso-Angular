import {  Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',

})
export class GifListItemComponent {

  //definimos un input para recibir la URL de la imagen
  //en este caso, la URL es un string, pero puede ser un objeto o cualquier otro tipo de dato
  //según lo que necesitemos para mostrar el gif
  //el input.required<string>() indica que este input es obligatorio y debe ser un string
  //esto es útil para evitar errores si no se proporciona un valor
  //en caso de que no se proporcione un valor, el componente no se renderizará correctamente
  //y se mostrará un error en la consola
  //esto es una buena práctica para asegurarnos de que el componente se use correctamente
  //y evitar errores en tiempo de ejecución
  imageURL= input.required<string>();



}
