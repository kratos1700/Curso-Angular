import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GisfSideMenuComponent } from "../../components/gisf-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GisfSideMenuComponent],
  templateUrl: './dashboard-page.component.html',

})
export default class DashboardPageComponent { }
