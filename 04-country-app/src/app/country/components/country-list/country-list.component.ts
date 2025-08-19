import { Component, input } from '@angular/core';
import RESTCountry from '../../interfaces/res-countries.interfaces';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

countries = input.required<RESTCountry[]>();


 }
