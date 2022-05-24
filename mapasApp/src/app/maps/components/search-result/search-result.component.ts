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

  ngOnInit(): void {
  }



}
