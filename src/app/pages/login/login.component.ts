import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private service: userService) {}

    error:boolean = false;
    errorMsj:string = "";

    show = false;
    passwordType= "password"

    usuario = {
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
    //console.log(this.email," ",this.password)
    this.usuario.email = this.email
    this.usuario.password = this.password
    const result:any = (await this.service.userLogin(this.usuario));
    if(result.Code == 0){
      console.log(result)
      localStorage.setItem('token',result.token)
      this.router.navigate(['/home'])
    }
    else if(result.Code == 2)
    {
      this.error = true;
      this.errorMsj = "Usuario bloqueado, contacte al administrador";
    }
    else
    {
      this.error = true;
      this.errorMsj = "El usuario o contraseña son inválidos";
    }
      
  }

  hideEye(){ 
    if (!this.show) 
    {
      this.show = true
      this.passwordType = 'text'
    }
    else
    {
      this.show = false;
      this.passwordType = 'password'
    }

  }

  get email(){
    return this.loginForm.get("email")?.value;
  }

  get password(){
    return this.loginForm.get("password")?.value;
  }


  }
