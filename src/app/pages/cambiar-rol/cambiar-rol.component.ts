import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cambiar-rol',
  templateUrl: './cambiar-rol.component.html',
  styleUrls: ['./cambiar-rol.component.css']
})
export class CambiarRolComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public  rolService: RolService,
    private router: Router,
    private userService : userService

  ) { }

  cambiosguardados: boolean = false;
  msj = "Cambios guardados con éxito. Inicie sesión nuevamente"

  cambiarRolForm: FormGroup = this.fb.group({
    "rol": new FormControl(null,Validators.required)
  })

    rolGet = {
      id_Tenant: 0
    }
    id_User = 0

    rolUpdate = {
      id_Rol: 0,
      id_Usuario: 0
    }

  ngOnInit(): void {
    this.rolGet.id_Tenant = this.userService.elUsuario.id_Tenant;
    this.id_User = this.userService.elUsuario.id_Usuario;
    console.log(this.rolGet);
    this.rolService.getRolesByTenant(this.rolGet);
  }

  async submitForm(){
    let id_Rol = parseInt(this.cambiarRolForm.value.rol);
    console.log(id_Rol)
    let user = {
      id_Usuario: this.id_User,
      id_Rol: id_Rol
    }
    console.log(user)

    this.rolService.updateRolByIdUsuario(user).then(resp =>{
      if(resp){
        this.cambiosguardados = true;
        setTimeout(() =>{this.userService.logout()},2000)
      }
    });
  }





}
