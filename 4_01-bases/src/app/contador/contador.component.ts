import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

            <h2> {{ titulo }}</h2>       
    <h3><strong>Tarea: La base es {{ base }} </strong></h3 >
    <button (click)="acumular(+base)" > +{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)"> -{{ base }}</button>
    
    `
})

export class ContadorComponent {
    titulo = 'Contador APP'; // se pot mostrar al html usant {{title}}
    numero:number =10;
    base:number =5;
    
    // se poden crear metodes dins el APPcomponent i cridar los al html
   
    acumular(valor:number){
      this.numero +=valor;
    }

}