import { Component, OnInit } from '@angular/core';
/**
 * importamos la libreria de mapbox al estar en js tenemos que instalar 
 * npm i --save-dev @types/mapbox-gl
 * y despues asignar un alias de todas las importaciones a mapboxg
 */
import * as mapboxgl from 'mapbox-gl'




@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Longitud, latitud  en mapbox, en google maps es diferente lat , lng 
      center:[0.799222074166876,40.88438537954659],
      zoom:14.5
    });
  }

}
