import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRol, loadModulo, loadModuloRes, opMenuItemsRes, usuarioOpMenu } from '../interfaces/interfaces';
import {userService} from "./user.service"

@Injectable({
  providedIn: 'root'
})
export class OpsmenuService {

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
    const resultado = await this.service.getRol().then(result => {
      rol.push(result)
      console.log(result);
      console.log(rol[0].id_Rol)
    })
    console.log(rol)
    console.log(rol[0].id_Rol)

    new Promise (resolve=>{
      this.http.post<loadModuloRes>("http://localhost:3000/consulta-modulo-por-rol", rol[0].id_Rol)
      .subscribe(resp=>{
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






