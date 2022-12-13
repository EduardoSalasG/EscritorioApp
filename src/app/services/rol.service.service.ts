import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRolesByTenantRes, updateRolByIdUsuario } from '../interfaces/interfaces';
import { userService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    private http : HttpClient,
    private userService : userService
    ) { }

  user: any = this.userService.elUsuario
  roles: any

  allOpsmenu: any
  allModules: any


   async getRolesByTenant(usuario:any){

    return this.http.post<getRolesByTenantRes>(`http://localhost:3000/get-roles-by-tenant`,usuario)
    .subscribe(resp=>{
      this.roles = resp
      console.log(this.roles)
    })
  }

  async updateRolByIdUsuario(usuario:any){
    return new Promise(async resolve => {
      this.http.post<updateRolByIdUsuario>(`http://localhost:3000/update-rol-by-id-usuario`,usuario)
      .subscribe(resp =>{
        if(resp.status == "ok"){
          resolve(true);
        }
      })
    })
  }

  async deleteOpcionMenuByIdRol(usuario:any){
    return new Promise(async resolve =>{
      this.http.post<updateRolByIdUsuario>(`http://localhost:3000/delete-opcionmenu-by-id-rol`,usuario)
      .subscribe(resp=>{
        if(resp.status == "ok"){
          resolve(true);
        }
      })
    })
  }

  async getModules(){
    return this.http.get('http://localhost:3000/get-modules')
    .subscribe(resp => {
      this.allModules = resp
    })
  }

  async getOpsmenu(){
    return this.http.get('http://localhost:3000/get-opsmenu')
    .subscribe(resp => {
      this.allOpsmenu = resp
    })
  }


  async setOpmenuByRolId(usuario:any){
    return new Promise(async resolve =>{
      this.http.post<updateRolByIdUsuario>(`http://localhost:3000/set-opmenu-by-rol-id`,usuario)
      .subscribe(resp=>{
        if(resp.status == "ok"){
          resolve(true);
        }
      })
    })
  }






}
