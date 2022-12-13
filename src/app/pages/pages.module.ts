import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpmenuModule } from '../opmenu/opmenu.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CambiarRolComponent } from './cambiar-rol/cambiar-rol.component';
import { CambiarOpMenuComponent } from './cambiar-op-menu/cambiar-op-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    CambiarRolComponent,
    CambiarOpMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OpmenuModule,
    RouterModule
  ]
})
export class PagesModule { }
