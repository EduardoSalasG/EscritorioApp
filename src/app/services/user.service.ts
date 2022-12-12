import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRol, loadMenuRes, loadModuloRes, loginResponse, loginResponse1, usuarioLogin } from '../interfaces/interfaces';
import { Resolve, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class userService {

  modulos: any[] = []
  menus: any[] = []

  sideMenu : any = []

  usuarioLogueado = false;
  token: any;
  loggedUser: any = {
    email_Usuario: "",
    id_Rol:0,
    id_Tenant: 0,
    id_Usuario: 0,
    nombre_Rol: "",
    nombre_Tenant: "",
    nombre_Usuario: ""
  }

  elUsuario: any;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  async userLogin(usuario:usuarioLogin){

    return new Promise(async resolve=>{
      this.http.post<loginResponse>("http://localhost:3000/login1",usuario)
      .subscribe(resp=>{
        console.log(resp); 
        if(resp.Code == 0){
          this.guardarToken(resp.token)
          const user = this.guardarUser(resp);
          this.elUsuario = this.guardarUser(resp);
          console.log(this.elUsuario)
          console.log("Este es el token :) : "+this.token)
          localStorage.setItem('email_Usuario',resp.email_Usuario)
          localStorage.setItem('id_Rol',resp.id_Rol.toString())
          localStorage.setItem('id_Tenant',resp.id_Tenant.toString())
          localStorage.setItem('id_Usuario',resp.id_Usuario.toString())
          localStorage.setItem('nombre_Rol',resp.nombre_Rol)
          localStorage.setItem('nombre_Tenant',resp.nombre_Tenant)
          localStorage.setItem('nombre_Usuario',resp.nombre_Usuario)
          localStorage.setItem('user',JSON.stringify({
            email_Usuario:resp.email_Usuario,
            id_Rol:resp.id_Rol,
            id_Tenant:resp.id_Tenant,
            id_Usuario:resp.id_Usuario,
            nombre_Rol:resp.nombre_Rol,
            nombre_Tenant:resp.nombre_Tenant,
            nombre_Usuario:resp.nombre_Usuario
          }))

          this.initSideMenu(user)
        }
        else{
          this.borrarToken()
        }

        resolve({Code: resp.Code,Response:resp.Response});
      })
    })   
  }

  initSideMenu(user: any){
  this.setModules(user)
  this.setMenuOptions(user);
  }

  async setModules(rol:any){
    return this.http.post<loadModuloRes>("http://localhost:3000/consulta-modulo-por-rol",rol)
      .subscribe(resp=>{
        console.log(resp);
        const halfclean = (resp.map(({ id_Modulo, nombre_Modulo}) => 
          (this.modulos.push(
            { id_Modulo : id_Modulo,
            menuName: nombre_Modulo, 
            subMenus: [] }
          ))
        ));
    })
  }

  async setMenuOptions(rol:any){
      return this.http.post<loadMenuRes>("http://localhost:3000/consulta-opMenu-por-rol",rol)
      .subscribe(resp=>{
        console.log(resp);
        const halfclean = (resp.map(({ id_OpMenu, nombre_OpMenu, url_OpMenu, id_Modulo}) => 
          (this.menus.push(
              { 
                id_Modulo: id_Modulo,
                id_OpMenu : id_OpMenu,
                nombre_OpMenu: nombre_OpMenu,
                url_OpMenu: url_OpMenu
              }
            )
          )
        ));
    })

  }

  orderModulesAndMenus(){
    this.modulos.forEach((modulo,i) => {
      console.log(modulo)
      this.menus.forEach((menu,f) => {
        console.log(menu)
        if (modulo[i].id_Modulo == menu[f].id_Modulo){
          this.sideMenu.push(modulo[i].subMenus.push(menu))  
        }
      })
    })
  }



  // leerToken(){
  //   let jwt = this.token;
  //   let jwtData = jwt.split('.')[1];
  //   let decodeJSONJwtData = window.atob(jwtData);
  //   let decodeJwtData = JSON.parse(decodeJSONJwtData);
  //   console.log("Leer Token: "+decodeJwtData);
  //   this.nombre_Usuario = decodeJwtData.user.name;
  //   this.nombre_Rol = decodeJwtData.user.role;
  // }


  guardarUser(resp:any){
    return {
      email_Usuario:resp.email_Usuario,
      id_Rol:resp.id_Rol,
      id_Tenant:resp.id_Tenant,
      id_Usuario:resp.id_Usuario,
      nombre_Rol:resp.nombre_Rol,
      nombre_Tenant:resp.nombre_Tenant,
      nombre_Usuario:resp.nombre_Usuario
    }
  }

  guardarToken(token:string){
    localStorage.setItem('token',token);
    this.token = token;
    this.usuarioLogueado = true;
  }

  cargarToken(){
    this.token = localStorage.getItem('token');
    if(this.token){
      this.usuarioLogueado = true;
    }
  }


  getEmail(){
    return localStorage.getItem('email');
  }


  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    this.borrarToken();
    this.router.navigate(['/login']);
    this.menus = [];
    this.modulos = [];
  }

  borrarToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('nombre_Tenant');
    localStorage.removeItem('nombre_Usuario');
    localStorage.removeItem('id_Usuario');
    localStorage.removeItem('nombre_Rol');
    localStorage.removeItem('id_Rol');
    localStorage.removeItem('id_Tenant');
    localStorage.removeItem('email_Usuario');
    localStorage.removeItem('user');
  }

// Sin uso, borrar

  async getTenantbyId(){
    const email = localStorage.getItem('email')
    console.log(email);
    return new Promise (resolve=>{
      const resultado = this.http.post("http://localhost:3000/tenant-by-id",email)
      .subscribe(resp=>{
        console.log(resp);
        resolve(resp);
    })
    })
    
  }

  async getRol(){
    return new Promise(resolve=>{
      this.http.get<getRol>("http://localhost:3000/get-rol")
      .subscribe(resp=>{
        console.log(resp); 
        resolve(resp);
      })
    })
  }

  

}
