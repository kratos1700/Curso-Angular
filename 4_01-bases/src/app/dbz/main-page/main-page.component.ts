import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  nuevo:Personaje={
    nombre: 'Trunks',
    poder: 11000
  }



  constructor() { 

  }

  ngOnInit(): void {

  }



  cambiarNombre(event:any){

    console.log( event.target.value );
    
  }

  //aqui declaramos las funciones/ metodos
  agregar(): void {
   
    console.log(this.nuevo);
    

  }

  

}
