import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/**
 * importamos la libreria de mapbox al estar en js tenemos que instalar 
 * npm i --save-dev @types/mapbox-gl
 * y despues asignar un alias de todas las importaciones a mapboxg
 */
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})

export class ZoomRangeComponent implements AfterViewInit {
// usamos la referencia local para crear multiples instancias de mapa
  @ViewChild('mapa') divMapa!:ElementRef;

  mapa!: mapboxgl.Map;

  constructor() { }
//usamos el After para que se pueda usar
// la referencia del mapa divMapa ya que aqui ya esta cargado
  ngAfterViewInit(): void {
     
    this.mapa = new mapboxgl.Map({
      // usamos la referencia creada del html usando el nativeElement
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Longitud, latitud  en mapbox, en google maps es diferente lat , lng 
      center: [0.799222074166876, 40.88438537954659],
      zoom: 14.5
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }
}
