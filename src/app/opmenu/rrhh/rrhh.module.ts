import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { RrhhHomeComponent } from './rrhh-home/rrhh-home.component';
import { RrhhRoutingModule } from './rrhh-routing.module';



@NgModule({
  declarations: [
    EmpleadosComponent,
    ValoracionesComponent,
    RrhhHomeComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
