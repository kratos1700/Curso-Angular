import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMeuComponent } from "../../components/Top-meu/Top-meu.component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMeuComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent { }
