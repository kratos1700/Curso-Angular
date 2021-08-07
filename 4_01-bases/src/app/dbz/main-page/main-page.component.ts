import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent  {


  // valor por defecto del componente
 nuevo: Personaje={
   nombre:'Follet tortuga',
   poder:15000,
 }

 



 constructor(){
   

 }
  
}
