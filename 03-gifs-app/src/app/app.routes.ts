import { Routes } from '@angular/router';

export const routes: Routes = [
  // definim les rutes de l'aplicació
  {
    path: 'dashboard',
    // carreguem el component de Dashboard de manera lazy
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
    // definim les rutes filles per a les pàgines de gifs
    // aquestes rutes es carregaran dins del component de Dashboard
    // i es mostraran en el seu interior
    children: [

      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component'),
      },

      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      }
    ]


  },






  {
    path: '**',
    redirectTo: 'dashboard',
  }

];
