import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  // obtenemos los resultados de la peticion
  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
