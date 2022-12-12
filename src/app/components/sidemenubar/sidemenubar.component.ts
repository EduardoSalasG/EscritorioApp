import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opMenuItems, opMenuItemsRes, userDecoded, usuarioOpMenu } from 'src/app/interfaces/interfaces';
import { OpsmenuService } from 'src/app/services/opsmenu.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidemenubar',
  templateUrl: './sidemenubar.component.html',
  styleUrls: ['./sidemenubar.component.css']
})
export class SidemenubarComponent implements OnInit {

  // userLocal: string = localStorage.getItem('user') || ""

  // loggedUser: any = JSON.parse(this.userLocal)

  // usuario1 : any[] = [this.loggedUser]

  // usuario: usuarioOpMenu = {
  //   tenant: 2,
  //   email: "miguelsuarezl@ripley.cl",

  // }

  items: any[] = [
    {
      menuName: "Menú 1",
      subMenus: 
      [
        {
          url: "submenu1",
          name: "Sub menú 1 ",
        },
        {
          url: "submenu2",
          name: "Sub menú 2 ",
        },
        {
          url: "submenu3",
          name: "Sub menú 3 ",
        }
      ]
    },
    {
      menuName: "Menú 2",
      subMenus: 
      [
        {
          url: "submenu4",
          name: "Sub menú 1 ",
        },
        {
          url: "submenu5",
          name: "Sub menú 2 ",
        },
        {
          url: "submenu6",
          name: "Sub menú 3 ",
        }
      ]
    },
    
  ]

  

  menuOp : any[]= [];

  constructor(
    private router: Router,
    private service: OpsmenuService,
    public userService: userService) { }

  ngOnInit(): void {
    // (this.loadOpMenu().then(result => this.menuOp.push(result)));
    // console.log(this.loggedUser);
    // console.log(this.menuOp);
    // this.userService.orderModulesAndMenus()
    console.log(this.userService.sideMenu)
    console.log(this.userService.modulos)
    console.log(this.userService.menus)
    //this.decodeUser();
    //this.loadModulo1();
  }

  // async loadOpMenu(){
  //   console.log(this.loggedUser)
  //   const result = await this.service.loadOpMenu(this.usuario)
  //   console.log(this.usuario)
  //   console.log(result)
  //   return result;
  // }


  // async loadModulo(){
  //   const result = await this.service.loadModulo()
  //   console.log(result)
  //   return result;
  // }

  // async loadModulo1(){
  //   const result = await this.service.loadModulo1({id_rol : this.usuario1[0].id_Rol})
  //   console.log(result)
  //   return result;
  // }


}
