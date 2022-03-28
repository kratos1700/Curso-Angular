import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
/*
interfaces 
*/
interface Persona{
  nombre:string,
  favoritos:Favorito []
}

interface Favorito{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

   // recuperamos el formulario de la referencia local con el ViewChild
   @ViewChild('miFormulario') miFormulario!:NgForm
  
   persona:Persona={
     nombre:'Pepitp',
     favoritos:[
       {id:1,nombre:'basquet'},
       {id:2,nombre:'ciclismo'}
     ]

   }


  nombreValido():boolean{
    return this.miFormulario?.controls.nombre?.invalid &&
   this. miFormulario?.controls.nombre?.touched
  }

  guardar(){
    console.log("Formulario posteado");
    
  }

}
