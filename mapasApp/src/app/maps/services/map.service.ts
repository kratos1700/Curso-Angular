import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?:Map;

  private markers:Marker[]=[];


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


  createMarkersFromPlaces(places:Feature[]){
    if (!this.map) throw Error('Mapa no inicializado');
// borramos los marcadores
    this.markers.forEach(marker=>marker.remove());
    const newMarkers=[];

    for(const place of places){
      const[lng, lat]= place.center;
      // creamos el popup
      const popup= new Popup()
      .setHTML(`
      <h6>${place.text}</h6>
      <span>${place.place_name}</span>
      `);
      // creamos una marca y le añadimos la lng y lat
      const newMarker=new Marker()
      .setLngLat([lng,lat])
      .setPopup(popup)
      .addTo(this.map);

      newMarkers.push(newMarker);
    }

    this.markers=newMarkers;
  }

  constructor() { }
}
