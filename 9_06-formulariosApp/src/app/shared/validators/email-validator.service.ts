import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// implementamos AsyncValidator para crear la validacion de las peticiones http al backend
export class EmailValidatorService implements AsyncValidator{

  constructor(private http:HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //guardamos el valor del campo email
    const email= control.value;

    console.log(email);
    
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    // le pasamos por el pipe para devolver lo que queremos
    .pipe( 
      //usamos el delay para simular una peticion al backend
      delay(3000),
      map(res=>{
        //Si la respuesta es igual a 0 podemos usar el correo, es null
        // sino ese correo esta usado al devolver algun dato
        return (res.length === 0) ? null : {emailUsado:true}
      })
    )
  }
}
