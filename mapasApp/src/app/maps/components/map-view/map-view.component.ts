import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Map, Popup, Marker} from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!:ElementRef

  constructor( private placeService:PlacesService) { }

  ngAfterViewInit(): void {
    if(!this.placeService.useLocation) throw Error('No hay ubicacion en el servicio')
   
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v10', // style URL
      center: this.placeService.useLocation,// starting position [lng, lat]
      zoom: 14 // starting zoom
      });

      const popup= new Popup()
      .setHTML(`
      <h6> Aquí estoy</h6>
      <span> Estoy en este lugar del mundo</span>
      `);
      new Marker({color:'red'})
      .setLngLat(this.placeService.useLocation)
      .setPopup(popup)
      .addTo(map)
    
  }

  ngOnInit(): void {
    // console.log(this.placeService.useLocation);
    
  }






}


