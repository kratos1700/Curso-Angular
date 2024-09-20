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

  // datos al cargar el form al html con el ngModel
  initForm={

    producto:'',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

//funcion para sustituir el codigo del html para optimizarlo
nombreValido():boolean{
  return this.miFormulario?.controls.producto?.invalid &&
 this. miFormulario?.controls.producto?.touched

}

// funcion para validar el precio al html
precioValido():boolean{
return this.miFormulario?.controls.precio?.value < 0 &&
this. miFormulario?.controls.precio?.touched
}


 // guardar(miFormulario:NgForm){
  guardar(){
    console.log(this.miFormulario);
    // reinicia el formulario una vez enviados los datos
   // this.miFormulario.resetForm();

   //le pasamos parametros a los campos una vez reseteado el form
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });
    
  }

}
