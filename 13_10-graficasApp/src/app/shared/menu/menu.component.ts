import { Component, OnInit } from '@angular/core';

//interface para las rutas del menu
interface MenuItem{
  ruta:string,
  texto:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

// opciones del menu
  menu:MenuItem[]=[
    {ruta:'/graficas/barra', texto:'Barras'},
    {ruta:'/graficas/barra-doble', texto:'Barras Dobles'},
    {ruta:'/graficas/dona', texto:'Dona'},
    {ruta:'/graficas/dona-http', texto:'Dona Http'},
  ]

  ngOnInit(): void {
  }

}