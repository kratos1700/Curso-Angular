import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/places.interfaces';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public selectedId:string='';

  constructor(private placesService:PlacesService,
     private mapService:MapService) { }


  get isLoadingPlaces():boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places():Feature[]{
    return this.placesService.places;
  }


  flyTo(place:Feature){
    this.selectedId= place.id;
    const [lng, lat]= place.center;

    this.mapService.flyTo([lng, lat]);


  }


  getDireccions(place:Feature){
    if(!this.placesService.useLocation)throw Error('No hay userLocation')
   
    this.placesService.deletePlaces();
   
    const start=this.placesService.useLocation!;
    const end= place.center as [number, number];
    this.mapService.getRouteBetweenPoints(start, end)

  }

  ngOnInit(): void {
  }



}
