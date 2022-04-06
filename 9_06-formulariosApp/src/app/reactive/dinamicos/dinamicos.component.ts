import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    // para establecer varios validadores se ponen entre []
    nombre: ['', [Validators.required, Validators.minLength(3)],],
    // iniciamos con un arreglo vacio el campo favoritos
    favoritos: this.fb.array([
      //coleciones de form controls
      ['Basquet'],
      ['Futbol']
    ], Validators.required)

  })
  // creamos un nuevo control para enlazar el campo
  // favoritos del html
  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  //funcion para validar campos y mostrar mensage de error
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  //funcion agregar favorito
  agregarFavorito() {
    //si el campo es invalido no hacemos nada, retornamos
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // añadimos el elemento 
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    //eliminamos el valor del campo
    this.nuevoFavorito.reset();
  }


  guardar() {

    if (this.miFormulario.invalid) {
      // hace que toque todos los campos y salten los errores si hay
      // this.miFormulario.markAllAsTouched();
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    //reseteamos el formulario
    this.miFormulario.reset();

  }

}
