import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogueado:boolean = false;

  loggedUser ={
    email_Usuario: localStorage.getItem('email_Usuario'),
    id_Rol: localStorage.getItem('id_Rol'),
    id_Tenant: localStorage.getItem('id_Tenant'),
    id_Usuario: localStorage.getItem('id_Usuario'),
    nombre_Rol: localStorage.getItem('nombre_Rol'),
    nombre_Tenant: localStorage.getItem('nombre_Tenant'),
    nombre_Usuario: localStorage.getItem('nombre_Usuario')
  }
  constructor(
    private service : userService
  ) { }

  ngOnInit(): void {
    // this.service.cargarToken();
    // this.loggedUser = this.service.loggedUser
    console.log(this.loggedUser)
  }

  logout(){
    this.service.logout();
  }

  getDecodedUser(){
  }

}
