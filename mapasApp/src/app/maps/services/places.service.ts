import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/places.Api.Client';
import { Feature, PlacesResponse } from '../interfaces/places.interfaces';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  public isLoadingPlaces:boolean=false;
  public places:Feature[]=[];

  get isUserLocationReady(): boolean {
    // comprobamos que hay datos con la doble negacion !!
    return !!this.useLocation
  }




  constructor(private placesApi:PlacesApiClient,
    private mapService:MapService) {

    this.getUserLocation();
   }

   public async getUserLocation(): Promise<[number,number]>{
     // convertimos a promesa el navigationLocation
     return  new Promise( (resolve, reject) =>{

      navigator.geolocation.getCurrentPosition(
        // extraemos las coords para poder asignar los valores
        ({coords})=> {
          this.useLocation= [coords.longitude, coords.latitude]
          resolve(this.useLocation)
        }, 
        (err)=>{
          alert('No se ha podido obtener la geolocalizacion')
          console.log(err);
          reject()
        }
      )

     } );
   }


   

  getPlacesByQuery(query:string=''){
    // si el query es 0 no ejecutamos la peticion
    if(query.length===0){
      this.isLoadingPlaces=false;
      this.places=[];
      return;
    }

    if(!this.useLocation)throw Error('No hay userLocation');
    
    this.isLoadingPlaces=true;
      this.placesApi.get<PlacesResponse>(`/${query}.json`,{
       params:{
         proximity:this.useLocation?.join(',')
       }
     })

     .subscribe(resp=>{
       
       this.isLoadingPlaces=false;
       this.places= resp.features;

       this.mapService.createMarkersFromPlaces(this.places)
     })
     
   }


}
