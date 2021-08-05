import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  personajes: Personaje[] = [
    {
    nombre:'Goku',
    poder:15000,
  },
  {
    nombre:'Vegeta',
    poder:15500,
  }

];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  //aqui declaramos las funciones/ metodos
  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {return;}
    else{

      
      this.personajes.push(this.nuevo);
      
      this.nuevo={
        nombre: '',
        poder:0
      }
    }

    console.log(this.nuevo);
  }
}
