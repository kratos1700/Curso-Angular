import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    this.router.navigateByUrl('/dashboard');
    
    
  }

}
