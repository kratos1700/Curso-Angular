import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  // creamos el formulario
 /* miFormulario:FormGroup= new FormGroup({
    'nombre':new FormControl('Llapis'),
    'precio':new FormControl(12),
    'existencias':new FormControl(50),

  });*/

 // creamos el formulario con formbuilder, forma mas clara
  miFormulario:FormGroup= this.fb.group({
    //primero el valor del campo, despues validador sincrono, despues validador asincrono
   // para establecer varios validadores se ponen entre []
    nombre: ['',[Validators.required, Validators.minLength(3)],],
    precio:[, [Validators.required ,Validators.min(0)]],
    existencias:[, [Validators.required ,Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    //establecemos valores por defecto
    // si no hay todos los valores, dara error
   // this.miFormulario.setValue({
     // con el reset se pueden dejar de especificar valores
    this.miFormulario.reset({
      nombre: 'llapis',
      precio:5,
     // existencias:100
    })

  }

  //funcion para validar campos y mostrar mensage de error
  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
    this.miFormulario.controls[campo].touched
  }


  guardar(){

    if(this.miFormulario.invalid){
      // hace que toque todos los campos y salten los errores si hay
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    //reseteamos el formulario
    this.miFormulario.reset();
    
  }

}
