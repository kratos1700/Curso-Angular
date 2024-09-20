import { Component } from "@angular/core";






@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{

    nombre: string='Ironman';
    edad:number =30;

    get nombreCapitalizado(){ // podemos crear get y set para utilizarlos en el html
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{

            return `${this.nombre} - ${this.edad}`; 
    }

    cambiarNombre():void{

        this.nombre = 'Spiderman';
    }
    cambiaEdad():void{

        this.edad =20;
    }

}