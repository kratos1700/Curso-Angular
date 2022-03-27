import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // recuperamos el formulario de la referencia local con el ViewChild
  @ViewChild('miFormulario') miFormulario!:NgForm

  constructor() { }

  ngOnInit(): void {
  }

//funcion para sustituir el codigo del html para optimizarlo
nombreValido():boolean{
  return this.miFormulario?.controls.producto?.invalid &&
 this. miFormulario?.controls.producto?.touched

}

precioValido():boolean{
return this.miFormulario?.controls.precio?.value < 0 &&
this. miFormulario?.controls.precio?.touched
}


 // guardar(miFormulario:NgForm){
  guardar(){
    console.log(this.miFormulario);
    
  }

}
