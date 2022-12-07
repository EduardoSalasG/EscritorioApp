import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private service: LoginService) {}

    usuario = {
      tenant: 2,
      email: "",
      password: ""
    }

  loginForm: FormGroup = this.fb.group({
    "email" : new FormControl(null,Validators.compose([Validators.required,Validators.email])),
    "password": new FormControl(null,Validators.required)
  })

 
  ngOnInit(): void {
  }

  async submitForm(){
    console.log(this.email," ",this.password)
    this.usuario.tenant = 2
    this.usuario.email = this.email
    this.usuario.password = this.password
    console.log(this.usuario)
    console.log(await this.service.userLogin(this.usuario));
      
  }

  get email(){
    return this.loginForm.get("email")?.value;
  }

  get password(){
    return this.loginForm.get("password")?.value;
  }


  }
