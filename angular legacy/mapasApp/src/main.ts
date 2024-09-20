import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// recordar de importar allowSyntheticDefaultImports en tsconfig.js
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoia3JhdG9zMTcwMCIsImEiOiJjbDJkZDFpdDkwcXBsM2pxcmZoOW42OHI5In0.C4vus8I7O1HSvQvazHqT0w'


// comprovamos si hay conexion a la geolocalizacion
if(!navigator.geolocation){
  alert('El navegador no soporta el geolacation')
  throw new Error('El navegador no soporta el geolacation')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
