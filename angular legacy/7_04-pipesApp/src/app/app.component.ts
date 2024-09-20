import { Component } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  constructor ( private primeNGConfig: PrimeNGConfig) {}  
  

  ngOnInit(): void{

    this.primeNGConfig.ripple= true; // activa la animacion de pulsar algun boton
  }
}
