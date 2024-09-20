
import { Component,ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  constructor(private gifsService: GifsService) { }

 @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; // nos permite obtener las funciones de la caja de texto de la busqueda
  buscar() {

    const valor= this.txtBuscar.nativeElement.value;
    if(valor.trim().length===0){return;} //si no hay nada escrito al campo no hacemos nada
    
    this.gifsService.buscarGifs(valor);

    
    this.txtBuscar.nativeElement.value='';// eliminamos el contenido del input
  }

}
