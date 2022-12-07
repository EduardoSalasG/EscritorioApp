import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RrhhHomeComponent } from './rrhh-home/rrhh-home.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';

const routes: Routes = [
  {
    path: 'home',
    component: RrhhHomeComponent  
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'valoraciones',
    component: ValoracionesComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RrhhRoutingModule { }
