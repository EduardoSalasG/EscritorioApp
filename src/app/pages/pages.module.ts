import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubMenu1Component } from './sub-menu1/sub-menu1.component';
import { SubMenu2Component } from './sub-menu2/sub-menu2.component';
import { SubMenu3Component } from './sub-menu3/sub-menu3.component';
import { SubMenu4Component } from './sub-menu4/sub-menu4.component';
import { SubMenu5Component } from './sub-menu5/sub-menu5.component';
import { SubMenu6Component } from './sub-menu6/sub-menu6.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubMenu1Component,
    SubMenu2Component,
    SubMenu3Component,
    SubMenu4Component,
    SubMenu5Component,
    SubMenu6Component
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }