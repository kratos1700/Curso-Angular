import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Contador APP'; // se pot mostrar al html usant {{title}}
  numero:number =10;
  numero1:number =10;
  base:number =5;
  
  // se poden crear metodes dins el APPcomponent i cridar los al html
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }
  acumular(valor:number){
    this.numero +=valor;
  }
}
