import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent implements OnInit {

  constructor( private mapService:MapService, private placeService:PlacesService) { }

  ngOnInit(): void {
  }

  goToMyLocation(){
    if(!this.placeService.isUserLocationReady) throw Error ('No hay ubicación de usuario');
    if(!this.mapService.isMapReady) throw Error ('Mapa no inicializado');

    this.mapService.flyTo(this.placeService.useLocation!)

  }

}
