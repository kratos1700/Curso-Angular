import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  public nombreApellidoRegex: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"


  constructor() { }



  //metodo para hacer una validacion sincrona personalizada
  // retorna el error o nulo
  noPuedeSerStrider(argu: FormControl): ValidationErrors | null {
    //guardamos el valor del campo
    const valor: string = argu.value?.trim().toLowerCase();
    // comparamos el valor para dar el error
    if (valor == 'strider') {
      // retornamos error
      return {
        noStrinder: true
      }
    }

    return null;

  }

  //funcion para comprobar los campos
  camposIguales(campo1: string, campo2: string) {
    //se tiene k devolver una funcion para la validacion, 
    // con el AbstractControl quitamos el deprecated el group del fb en el registro componen
    return (control: AbstractControl): ValidationErrors | null => {

      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if (pass1 !== pass2) {

        control.get(campo2)?.setErrors({ noIguales: true})
        return { noIguales: true }
      }

      // limpiamos el error de confirmar password
      control.get(campo2)?.setErrors(null)
      return null;
    }

  }

}
