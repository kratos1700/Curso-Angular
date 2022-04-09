import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { emailRegex, nombreApellidoRegex, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //creamos el formulario
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoRegex)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailRegex)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],

    // ponemos , y abrimos llaves para mandor opciones al form group
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]

  })

  //emailErrorMsg: string='';

  // get para capturar los errores y
  // evaluarlos dando una respuesta en funcion del tipo de dato requerido
  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'El Email es obligatorio'
    } else if (errors?.pattern) {
      return 'El formato de Email es incorrecto'
    } else if (errors?.emailUsado) {
      return 'El Email ya esta en uso'
    }
    return ''
  }

  // creamos el FormBuilder, creamos el servicio de validaciones personalizadas
  constructor(private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
  }

  // funcion para visualizar un mensage error si
  //  un campo es invalido
  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
  }


  submitFormulario() {
    console.log(this.miFormulario.value);
    // hacemos saltar las validaciones de todos los campos
    this.miFormulario.markAllAsTouched();

  }



}
