import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
// carga lazy

{
  path: 'selector',
loadChildren: ()=> import ('./paises/paises.module').then( m =>m.PaisesModule)

},
// cualquier cosa que escribamos al url redirigira a selector
{
  path:'**', redirectTo:'selector'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
