import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent   {

  heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thorn', 'Teddy'];
  heroeBorrado:string ='';

  borrarHeroe(){
    
    
     this.heroeBorrado = this.heroes.shift() || ''; // .Shift(), elimina el indice 0 ,  splice elimina un elemento del arreblo pasando el inicio i num de elementos a borrar .splice(0,1)
    console.log(this.heroeBorrado);
    
  }

}
