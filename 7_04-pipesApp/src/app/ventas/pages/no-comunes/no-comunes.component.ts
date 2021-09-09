import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Kratos';
  genero: string = 'masculino';

  invitacionesMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Miki'];

  clienteMapa = {
    '=0': ' no tenemos ningun clinte esperando',
    '=1': ' tenemos un cliente esperando',
    other: ' tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  borrarCliente() {
    //this.clientes.splice(0,1);
    this.clientes.pop();

    console.log(this.clientes.length);
  }

  //KeyValue Pipes

  persona = {
    nombre: 'Kratos',
    edad: 41,
    direccion: ' Donde el tiempo no se acaba',
  };

  //Json Pipes
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ];

// Async Pipe

miObservable= interval(1000); // genera numeros empezando por el 0

valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve('Fin de la promesa')
  },3500)
})





}
