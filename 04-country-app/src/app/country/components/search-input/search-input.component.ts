import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {


placeholder = input('Buscar')
value = output<string>(); // value es para emitir el valor de la busqueda






}
