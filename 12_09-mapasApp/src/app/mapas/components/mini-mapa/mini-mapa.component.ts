import { AfterViewInit, Component,ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements AfterViewInit {

//recibimos la lng i lat
@Input() lngLat: [number,number]= [0,0];

// con la ref del mapa #mapa
@ViewChild('mapa') divMapa!:ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    const map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Longitud, latitud  en mapbox, en google maps es diferente lat , lng 
      center:this.lngLat,
      zoom:14.5,
      interactive:false
    });

    new mapboxgl.Marker()
    .setLngLat(this.lngLat)
    .addTo(map);

   
  }

  ngOnInit(): void {
  }

}
