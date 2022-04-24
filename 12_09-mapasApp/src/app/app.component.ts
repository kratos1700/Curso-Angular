import { Component, OnInit } from '@angular/core';
/**
 * importamos la libreria de mapbox al estar en js tenemos que instalar 
 * npm i --save-dev @types/mapbox-gl
 * y despues asignar un alias de todas las importaciones a mapboxg
 */
 import * as mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    //CONFIGURAMOS EL MAPA de manera global
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
  title = 'mapasApp';
}
