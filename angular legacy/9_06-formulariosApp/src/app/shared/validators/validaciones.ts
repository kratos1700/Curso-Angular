import { FormControl } from "@angular/forms";



export const nombreApellidoRegex:string="([a-zA-Z]+) ([a-zA-Z]+)";
export const emailRegex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

//metodo para hacer una validacion sincrona personalizada
export const noPuedeSerStrider=(argu:FormControl)=>{
  //guardamos el valor del campo
 const valor:string= argu.value?.trim().toLowerCase();
 // comparamos el valor para dar el error
 if(valor=='strider'){
   // retornamos error
   return{
     noStrinder:true
   }
 }
  
 return null;

}