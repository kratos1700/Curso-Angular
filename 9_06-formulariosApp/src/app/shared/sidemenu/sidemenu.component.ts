import { Component } from '@angular/core';

/**
 * interface para el menu
 */
interface MenuItem{
  texto:String;
  ruta:String;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
  li{
    cursor:pointer
  }
  `
  ]
})
export class SidemenuComponent  {

 templateMenu:MenuItem[]=[
   {
     texto:'Basicos',
     ruta: './template/basicos'
   },
   {
     texto:'dinamicos',
     ruta: './template/dinamicos'
   },
   {
     texto:'switches',
     ruta: './template/switches'
   }
 ];

 reactiveMenu:MenuItem[]=[
  {
    texto:'Basicos',
    ruta: './reactive/basicos'
  },
  {
    texto:'dinamicos',
    ruta: './reactive/dinamicos'
  },
  {
    texto:'switches',
    ruta: './reactive/switches'
  }
];
authMenu:MenuItem[]=[
  {
    texto:'Registro',
    ruta: './auth/registro'
  },
  {
    texto:'login',
    ruta: './auth/login'
  },
]

}
