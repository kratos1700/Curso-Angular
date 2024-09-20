import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  // se emitira un evento al hacer enter, que sera el termino de la busqueda
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // SISTEMA DE AYUDA EN LA CAJA DE BUSQUEDAD
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //Recibimos el string del placeholder, creamos una nueva propiedad para usar en el html 
  @Input() placeholder: string ='';

  //El subject es un observable
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300)) // debounceTime hace que no emita el suscribe asta que pasen 300ms
    .subscribe((valor) => {
      console.log('debouncer;', valor);
      this.onDebounce.emit(valor); // emitimos el valor por el observable
    });
  }

  buscar() {
    // emitimos el termino
    this.onEnter.emit(this.termino);
  }

  teclaPulsada() {
    // capturamos el caracter de la tecla pulsada

    this.debouncer.next(this.termino);
  }
}
