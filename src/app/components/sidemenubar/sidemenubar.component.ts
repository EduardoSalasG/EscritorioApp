import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenubar',
  templateUrl: './sidemenubar.component.html',
  styleUrls: ['./sidemenubar.component.css']
})
export class SidemenubarComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
