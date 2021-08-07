
import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  constructor() { }

 @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; // nos permite obtener las funciones de la caja de texto de la busqueda
  buscar() {

    const valor= this.txtBuscar.nativeElement.value;
    console.log(valor);
    
    this.txtBuscar.nativeElement.value='';// eliminamos el contenido del input
  }

}
