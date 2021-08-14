import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap ,tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  
  pais!:Country;

  // activatedRoute nos sirve para poder suscribirnos a cualquier cambio en la url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {

    // es lo mismo que lo que esta comentado abajo
    this.activatedRoute.params
      .pipe(
        // retorna un observable
        switchMap(({ codigoPais }) => this.paisService.getPaisPorCodigo(codigoPais)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);

    // desestructuramos el params para obtener solamente el codigo del pais
    // this.activatedRoute.params.subscribe(({ codigoPais }) => {
    //   console.log(codigoPais);

    //   this.paisService.getPaisPorCodigo(codigoPais)
    //   .subscribe(pais =>{ // nos suscribimos para obtener la info
    //     console.log(pais);

    //   })
    // });
  }
}
