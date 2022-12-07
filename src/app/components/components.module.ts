import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenubarComponent } from './sidemenubar/sidemenubar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidemenubarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidemenubarComponent
  ]
})
export class ComponentsModule { }
