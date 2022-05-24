import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?:Map;

/**
 * GET Y SET PARA MAPA
 */
  get isMapReady(){
    return !!this.map
  }

  setMap(map:Map){
    this.map= map;
  }

  flyTo(coords:LngLatLike){
    // si el mapa no esta cargado
    if(!this.isMapReady) throw Error ('El mapa no esta listo!');

    this.map?.flyTo({
      zoom:14,
      center:coords
    })

  }

  constructor() { }
}
