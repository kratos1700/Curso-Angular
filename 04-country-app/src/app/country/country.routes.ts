import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const CountryRoutes: Routes = [

  {
    path: '',
    component: ByCapitalPageComponent,
  },





  {
    path:'**',
    redirectTo: '',
  }


];


export default CountryRoutes;
