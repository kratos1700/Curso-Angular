import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  miFormulario:FormGroup= this.fb.group({
    nombre:['',Validators.required]
  });

  // variables de prueba
  color:string='green';
  texto1:string='Yo';

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo:string):boolean{

    return this.miFormulario.get(campo)?.invalid || false
  }
//creamos un color aleatorio
  cambiarColor(){
    
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    this.color= color;
  }

  cambiarNombre(){
    this.texto1='Pepito'
  }

}
