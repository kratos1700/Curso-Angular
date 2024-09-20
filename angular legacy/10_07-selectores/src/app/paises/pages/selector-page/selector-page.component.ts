import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {switchMap, tap} from 'rxjs/operators'
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  // creamos el formulario para trabajar con form reactivos
  miFormulario :FormGroup= this.fb.group({

    region:['', Validators.required],
    pais:['', Validators.required],
    frontera:['', Validators.required]

  })

  //llenar selector
  regiones:string[]=[];
  paises:PaisSmall[]=[];
  //fronteras:string[]=[];
  fronteras:PaisSmall[]=[];

  //UI
  cargando:boolean=false;


  constructor(private fb:FormBuilder,private paisesService:PaisesService) { }

  ngOnInit(): void {

    //cargamos las regiones
    this.regiones=this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      //lanzamos un efecto secundario con tap para resetear los campos
      //una vez cambiada la region. (_) es para decir k no importa el valor que tenemos
      tap( (_) =>{
        this.miFormulario.get('pais')?.reset('');
        //mostramos el mensaje de cargando
        this.cargando=true;

      }),
       //usamos el pipe para modificar el valor 
      // una vez que obtenemos el valor, lo cambiamos por la siguiente peticion
      switchMap(region => this.paisesService.getPaisesPorRegion(region)) 
    )
    .subscribe(paises =>{
      this.paises=paises   
      //quitamos el mensaje de cargando
      this.cargando=false; 
    })


    // cuando el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      // limpiamos las fornteras
      tap( (_)=> { this.fronteras=[];
        //limpiamos el formulario
      this.miFormulario.get('frontera')?.reset('')
      //mostramos cargando
      this.cargando=true;
    }),

      switchMap(codigo => this.paisesService.getPaisesPorCodigo(codigo)),
      switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
    )
    .subscribe( paises => {
      // rellenamos las fronteras pero si el pais no tiene lo rellenamos con un arreglo vacio
     // this.fronteras= pais?.borders || [];
     this.fronteras=paises;
      //eliminamos cargando
      this.cargando=false;
      
    })

  }


  guardar(){
    console.log(this.miFormulario.value);
    
  }
}
