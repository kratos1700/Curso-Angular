import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    // el validador evalua si es el booleano true
    condiciones: [false, Validators.requiredTrue]

  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // relacionamos los datos de la persona al formulario html
    // this.miFormulario.reset(this.persona)

    // podemos establecer un valor al elemento en concreto 
    this.miFormulario.reset({
      //extramos todos los datos de la persona
      ...this.persona,
      // establecemos un campo por defecto
      condiciones: false
    })

    //comprovamos en tiempo real los cambios en los campos
    //this.miFormulario.valueChanges.subscribe( form=>{
      // desestructuramos el form y sacamos el atributo condiciones
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...resto})=>{
    //delete form.condiciones;
    // guardamos los datos en la persona
    this.persona= resto;
      
    })

    // nos suscribimos a un campo 
    this.miFormulario.get('condiciones')?.valueChanges.subscribe(valor=>{
      console.log(valor);
      
    })
      
  
  }

// funcion para guardar los datos del formulario y establecerlos a la persona
  guardar() {
    // guardamos los datos del formulario en una constante
    const formValue = { ...this.miFormulario.value };
    // ahora podemos eliminar el campo que no nos interesa
    delete formValue.condiciones;

    this.persona= formValue;
  }

}
