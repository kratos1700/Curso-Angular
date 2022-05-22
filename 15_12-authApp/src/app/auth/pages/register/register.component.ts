import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario:FormGroup= this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
  })

  constructor(private fb:FormBuilder, private router:Router,
     private authService:AuthService) { }

  ngOnInit(): void {
  }

  registrarse(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    const {nombre, email, password}= this.miFormulario.value;

    this.authService.registro(nombre, email, password).subscribe(ok=>{
      if(ok === true){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Usuario ${nombre} ha sido creado!!`, // el ok esta el error de la respuesta
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigateByUrl('/dashboard');
      }else{
        // Swal.fire('Error', ok, 'error')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: ok, // el ok esta el error de la respuesta
          showConfirmButton: true,
          timer: 2500
        })
      }
      
    });

    this.router.navigateByUrl('/dashboard');
    
    
  }

}
