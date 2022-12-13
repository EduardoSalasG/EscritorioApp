import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cambiar-op-menu',
  templateUrl: './cambiar-op-menu.component.html',
  styleUrls: ['./cambiar-op-menu.component.css']
})
export class CambiarOpMenuComponent implements OnInit {

  allOpsmenu: any
  allModules: any

  cambiosguardados: boolean = false;
  msj = "Cambios guardados con éxito. Inicie sesión nuevamente"

  updateOpsmenuForm: FormGroup = this.fb.group({
    "opsMenu": new FormControl(null,Validators.required)
  })

  id_Rol = 0;

  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    public rolService: RolService,
    private router: Router,
    private userService: userService
  ) { }

  ngOnInit(): void {
    this.rolService.getModules();
    this.rolService.getOpsmenu();
    // this.allModules = this.rolService.allModules
    // this.allOpsmenu = this.rolService.allOpsmenu
    }

    async submitForm(){
      let opsMenu = this.updateOpsmenuForm.get('opsMenu');
      console.log(opsMenu)
      let user = {
        id_OpMenu: opsMenu,
        id_Rol: this.id_Rol
      }
      console.log(user)
  
      // this.rolService.updateRolByIdUsuario(user).then(resp =>{
      //   if(resp){
      //     this.cambiosguardados = true;
      //     setTimeout(() =>{this.userService.logout()},2000)
      //   }
      // });
    }




}
