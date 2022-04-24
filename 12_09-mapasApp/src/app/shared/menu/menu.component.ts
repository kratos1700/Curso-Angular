import { Component, OnInit } from '@angular/core';
//creamos una interface para las opciones/rutas del menu
interface MenuItem {
  ruta: string,
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // opciones a mostrar del menu con las rutas
  menuItems: MenuItem[] = [

    {
      ruta: 'mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: 'mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: 'mapas/propiedades',
      nombre: 'Propiedades'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
