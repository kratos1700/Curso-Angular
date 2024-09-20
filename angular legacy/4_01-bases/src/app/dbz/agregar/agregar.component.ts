import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  constructor(private dbzService:DbzService) { }



@Input() 
nuevo: Personaje = {
  nombre: '',
  poder: 0,
};


//@Output() // nos permite emitir eventos, se tiene que especificar el tipo de dato en este caso es de tipo personaje
//onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

//aqui declaramos las funciones/ metodos
agregar(): void {

  if (this.nuevo.nombre.trim().length === 0) {return;}
  else{

    this.dbzService.agregarPersonaje(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo) // emitimos un nuevo personaje con el evento
    
    
    this.nuevo={
      nombre: '',
      poder:0
    }
  }

 
}




}
