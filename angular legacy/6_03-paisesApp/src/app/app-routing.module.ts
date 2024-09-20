import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//configuracion de las rutas
const routes: Routes = [
    {
        path: '', // ruta principal por defecto
        component:PorPaisComponent,
        pathMatch:'full'
    },
    { 
        path: 'region', // ruta por region
        component:PorRegionComponent
        
    },
   { 
    path: 'capital', // ruta  capital
    component:PorCapitalComponent
   },

   { 
    path: 'pais/:codigoPais', // ruta  para ver el pais
    component:VerPaisComponent
   },
   { 
       path: '**', // redireccionamos a la ruta principal en caso de introducir algo no valido 
       redirectTo:''
   }
    
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule {}
