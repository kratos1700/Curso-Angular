import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {


  termino:string='';
  isError:boolean=false;
  paises:Country[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }



  // LA PALABRA ES EL STRING QUE EMOS EMITIDO Y CAPTURADO DESDE EL EVENT DEL HTML
  buscar(palabra:string){
    this.isError=false;
    console.log(this.termino);

    // LE ASIGNAMOS EL VALOR DE LA PALABRA AL TERMINO PARA HACER LA BUSQUEDA A L API
    this.termino = palabra;

    this.paisService.buscarPais(this.termino)
    // en caso que la peticion sea correcta y nos envie un status 200
    .subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
      
      
      // en caso que el backend nos envie un status 404
    },(err) => {

      this.isError=true;
      this.paises=[];

    console.log('Error');
    console.info(err);
    
      
    });
    
  }
  // metodo para las suguerencias de la caja de texto
  sugerencias(termino:string){
    this.isError=false;
    //TODO: crear suguerencia
    

  }

}
