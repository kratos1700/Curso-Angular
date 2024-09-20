import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

import {  switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  
    img { width: 100%; 
    border-radius:5px; 
  
  }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  constructor(private activatedRoute: ActivatedRoute ,
     private heroesService: HeroesService,
     private router: Router) { }

  ngOnInit(): void {

      this.activatedRoute.params
      .pipe ( // desestructuramos obteniendo solamente el id del heroe
        switchMap( ({id})=>  this.heroesService.getHeroesById(id) ))
        .subscribe(heroe => {
          this.heroe = heroe;
        })
  }

  // metodo para navegar al pulsar el boton regresar
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
