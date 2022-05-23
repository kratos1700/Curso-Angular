import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    // comprobamos que hay datos con la doble negacion !!
    return !!this.useLocation
  }

  constructor() {
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

     } )
   }
}
