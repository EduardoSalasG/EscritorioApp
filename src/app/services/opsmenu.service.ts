import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRol, loadModulo, loadModuloRes, opMenuItemsRes, userDecoded, usuarioOpMenu } from '../interfaces/interfaces';
import {userService} from "./user.service"

@Injectable({
  providedIn: 'root'
})
export class OpsmenuService {

  rol: any = localStorage.getItem('rol_Id')
  rol_Id = parseInt(this.rol)
  user_Email = localStorage.getItem('user_Email');
  tenant: any = localStorage.getItem('tenant_Id');
  tenant_Id = parseInt(this.tenant);
  constructor(
    private http: HttpClient,
    private service: userService) { }

  async loadOpMenu(usuario:usuarioOpMenu){
    return new Promise (resolve=>{
      this.http.post<opMenuItemsRes>("http://localhost:3000/opcion-menu",usuario)
      .subscribe(resp=>{
      const halfclean = (resp.map(({ nombre_Modulo, nombre_OpMenu, url_OpMenu}) => 
      ({ menuName: nombre_Modulo, 
        subMenus: {url: url_OpMenu, name: nombre_OpMenu} })));

      const halfclean2 = {"menuName": "", "subMenus": new Array}
      
      halfclean.forEach(element=> { 
        halfclean2.menuName = element.menuName;
        const semi = {url: element.subMenus.url, name: element.subMenus.name}
        halfclean2.subMenus.push(semi);
      }); 
      console.log(halfclean2)
      resolve(halfclean2); 
      })
  
    })
  }


  async loadModulo(){
    const rol : any[] = []
    const resultadoModulos = await this.loadModulo1(this.rol_Id).then(result =>{
      console.log(result)
    })
  
    }



    async loadModulo1(rol:any){
      console.log(rol)
      return new Promise (resolve=>{
        this.http.post<loadModuloRes>("http://localhost:3000/consulta-modulo-por-rol", rol)
        .subscribe(resp=>{
          console.log(resp);
        const halfclean = (resp.map(({ id_Modulo, nombre_Modulo}) => 
        ({ id_Modulo : id_Modulo,
          menuName: nombre_Modulo, 
          subMenus: [] }))
          );
          console.log(halfclean)
          resolve(halfclean); 
        }); 
        
        })
    }

  }

  






  
  // const halfclean2 = {"menuName": "", "subMenus": new Array}
      
  // halfclean.forEach(element=> { 
  //   halfclean2.menuName = element.menuName;
  //   const semi = {url: element.subMenus.url, name: element.subMenus.name}
  //   halfclean2.subMenus.push(semi);
  // }); 
  // console.log(halfclean2)
  // resolve(halfclean2); 
  // })






