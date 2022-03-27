import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

// decorador de directiva
@Directive({
    selector:'[customMin][ngModel]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting:CustomMinDirective,
        multi:true
    }]
        
})
export class CustomMinDirective implements Validator{

// para recibir del padre usamos el input. lo llamamos minimo i siempre tiene un valor
@Input() minimo!:number;

constructor(){
    console.log('Directiva', this.minimo);
    
}
    validate( control:FormControl){
        const inputValue= control.value;

        console.log(inputValue);

        console.log('minimo', this.minimo);
        
        return (inputValue< this.minimo)? {'customMin':true} : null;
        

    }
    
}