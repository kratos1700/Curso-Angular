import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{
   private _personajes: Personaje[] = [
        {
        nombre:'Goku',
        poder:15000,
      },
      {
        nombre:'Vegeta',
        poder:15500,
      }
    
    ];


    get personajes():Personaje[]{
        return [...this._personajes]; // al trabajar por referencia, [...this._personajes] rompemos esa referencia
    }
    constructor(){
        
        
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

}