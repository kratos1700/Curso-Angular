import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  //damos formato css al boton
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  // metodo para cambiar el comportamiento de los botones de las regiones
  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  // metodo para asignar la region seleccionada al boton
  activarRegion(region: string) {

    // condicion para si pulsamos el mismo boton no cargue los datos otra vez
    if(region === this.regionActiva){ return;}

    this.regionActiva = region;
    this.paises=[];

    // TODO: aqui cargaremos el servivcio

    this.paisService.buscarRegion(region).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.paises = [];

        console.log('Error');
        console.info(err);
      }
    );
  }
}
