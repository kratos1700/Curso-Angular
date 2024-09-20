import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // DA ESTILO AL CURSOR AL PASAR POR ENCIMA DE LAS OPCIONES DEL SIDEBAR, ES LO MISMO K DEFINIRLO AL CSS
  styles:[  
    `li{ 
      cursor:pointer;

    }`
    
  ] 
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
