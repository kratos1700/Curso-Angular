import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/**
 * importamos la libreria de mapbox al estar en js tenemos que instalar 
 * npm i --save-dev @types/mapbox-gl
 * y despues asignar un alias de todas las importaciones a mapboxg
 */
import * as mapboxgl from 'mapbox-gl'

// interface para obtener el color
interface MarcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnInit {

  // usamos la referencia local para crear multiples instancias de mapa
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  //variable para controlar el zoom
  zoomLevel: number = 15.5;
  // variable para controlar el centro del mapa con las coordenadas al html
  center: [number, number] = [0.799222074166876, 40.88438537954659]

  // arreglo de marcadores
  marcadores: MarcadorColor[] = [];


  constructor() { }


  ngAfterViewInit(): void {
    // mostramos el mapa en el html    
    this.mapa = new mapboxgl.Map({
      // usamos la referencia creada del html usando el nativeElement
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      // Longitud, latitud  en mapbox, en google maps es diferente lat , lng 
      center: this.center,
      zoom: this.zoomLevel
    });

    //leemos el local storage para recuperar marcadore si existen
    this.leerLocalStorage();

    /* // EJEMPLOS DE PONER MARCADOR FIJO I PREDEFINIDO
    //ponemos un marcador
    const maker = new mapboxgl.Marker()
    // le definimos las coord con objeto pares valor
      .setLngLat(this.center)
      // lo añadimos al mapa
      .addTo(this.mapa)

      //para añadir un marcador personalizado, creamos un div
      const markerHtml :HTMLElement= document.createElement('div');
      // definimos lo que queremos
      markerHtml.innerHTML='HOLA MUNDOOO!!!'
      //lo añadimos
      new mapboxgl.Marker({element:markerHtml})
      .setLngLat(this.center)
      .addTo(this.mapa)
    */

    /**
     * MARCADORES DINAMICOS
     */



  }

  // funcion para agregar marcadores
  agregarMarcador() {

    //creamos un color aleatorio
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    // con el {draggable:true} nos permite mover las marcas
    const nuevoMarcador = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage()

    // listener para guardar las coord al localStorage
    nuevoMarcador.on('draged', () => {
      this.guardarMarcadoresLocalStorage()
    });

  }

  irMarcador(marker: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat()
    })

  }


  // funcion para guardar los marcadores al localStorage
  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorColor[] = [];
    // recorremos el arreglo  para extraer la info necesaria para guardar
    this.marcadores.forEach(m => {
      const color = m.color
      const { lng, lat } = m.marker!.getLngLat();

      // arreglo para guardar al local storage
      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      });
    })
    // serializamos el arreglo para guardarlo al 
    //localstorage con JSON.stringify()
    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));

  }

  //funcion para leer el localstorage
  leerLocalStorage() {

    // si no existe
    if (!localStorage.getItem('marcadores')) {
      return;

    }
    // leemos el local storage y volvemos a contruir el objeto con JSON.parse
    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    // creamos los marcadores
    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true // opcion para poder moverlos
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })


      // listener para guardar las coord al localStorage
      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      })
    })


  }


  borrarMarcador(i: number) {

    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);

  }

  ngOnInit(): void {
  }

}
