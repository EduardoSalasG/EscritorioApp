import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opMenuItems, opMenuItemsRes, usuarioOpMenu } from 'src/app/interfaces/interfaces';
import { OpsmenuService } from 'src/app/services/opsmenu.service';

@Component({
  selector: 'app-sidemenubar',
  templateUrl: './sidemenubar.component.html',
  styleUrls: ['./sidemenubar.component.css']
})
export class SidemenubarComponent implements OnInit {

  usuario: usuarioOpMenu = {
    tenant: 1,
    email: 'juanperezh@falabella.cl'
  }

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
    private service: OpsmenuService) { }

  ngOnInit(): void {

    (this.loadOpMenu().then(result => this.menuOp.push(result)));
    console.log(this.menuOp);
    this.loadModulo()
  }

  async loadOpMenu(){
    //console.log(this.email," ",this.password)
    // this.usuario.email = this.email
    // this.usuario.password = this.password
    const result = await this.service.loadOpMenu(this.usuario)
    console.log(result)
    return result;
  }

  async loadModulo(){
    const result = await this.service.loadModulo()
    console.log(result)
    return result;
  }


}
