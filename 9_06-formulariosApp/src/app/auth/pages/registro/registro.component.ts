import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoRegex:string="([a-zA-Z]+) ([a-zA-Z]+)";
  emailRegex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  //creamos el formulario
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoRegex)]],
    email:['',[Validators.required, Validators.pattern(this.emailRegex)]],

  })

  // creamos el FormBuilder
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // funcion para visualizar un mensage error si
  //  un campo es invalido
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid &&
    this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    // hacemos saltar las validaciones de todos los campos
    this.miFormulario.markAllAsTouched();
    
  }

}
