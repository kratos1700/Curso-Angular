import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
/**
 * importamos la libreria de mapbox al estar en js tenemos que instalar 
 * npm i --save-dev @types/mapbox-gl
 * y despues asignar un alias de todas las importaciones a mapboxg
 */
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})

export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  /*
    VARIABLES
  */
// usamos la referencia local para crear multiples instancias de mapa
  @ViewChild('mapa') divMapa!:ElementRef;
  mapa!: mapboxgl.Map;
  //variable para controlar el zoom
  zoomLevel:number=14;
  // variable para controlar el centro del mapa con las coordenadas al html
  center:[number,number]= [0.799222074166876, 40.88438537954659]

  constructor() { }

  //IMPORTANTE: al usar eventos listener se tienen que finalizar al destruir el componente
  ngOnDestroy(): void {
    // con el .of() destruimos el listener
    this.mapa.off('zoom',()=>{});
    this.mapa.off('zoomend',()=>{});
    this.mapa.off('move',()=>{});
    
    
  }
//usamos el After para que se pueda usar
// la referencia del mapa divMapa ya que aqui ya esta cargado
  ngAfterViewInit(): void {
     
    this.mapa = new mapboxgl.Map({
      // usamos la referencia creada del html usando el nativeElement
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Longitud, latitud  en mapbox, en google maps es diferente lat , lng 
      center: this.center,
      zoom: this.zoomLevel
    });


    // creamos un listener para poder controlar el zoom del mapa
    // con el .on() lo creamos, con 'zoom' obtenemos todos los valores
    this.mapa.on('zoom', (even)=> {
      this.zoomLevel=this.mapa.getZoom();
      
    });

    //creamos listener para controlar el zoomend maximo i minimo
    this.mapa.on('zoomend', (even)=> {
      if (this.mapa.getZoom()> 19) {
        this.mapa.zoomTo(19);
      }
      if (this.mapa.getZoom()< 1) {
        this.mapa.zoomTo(1);
      }
      
    });
   

    // listener para controlar las coordenadas del centro del mapa
    this.mapa.on('move', (even)=>{
      const target = even.target;
      // obtenemos los datos de la funcion
      // console.log(target.getCenter());
      // desestructuramos la lat i lng
      const {lng, lat}= target.getCenter();
      // asignamos los valores a la variable center
      this.center= [lng, lat];
      
    })


  }

  zoomOut() {
    this.mapa.zoomOut();

    this.zoomLevel= this.mapa.getZoom()
  }

  zoomIn() {
    this.mapa.zoomIn();

    this.zoomLevel= this.mapa.getZoom()
  }

  //funcion para control del range
  zoomCambio(valor:string){
    this.mapa.zoomTo(Number(valor))

  } 
}
