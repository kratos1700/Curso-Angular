import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
  },

  //cargamos de forma perezosa la ruta country
  {
    path:'country',
    loadChildren: () => import('./country/country.routes')

  },

  {
    path:'**',
    redirectTo: '',
  }


];


