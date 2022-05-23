import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsScreenComponent } from './screens/maps-screen/maps-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapsScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapsScreenComponent
  ]
})
export class MapsModule { }
