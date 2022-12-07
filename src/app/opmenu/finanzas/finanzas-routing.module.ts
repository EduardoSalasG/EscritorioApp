import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FinanzasHomeComponent } from './finanzas-home/finanzas-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: FinanzasHomeComponent  
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contabilidad',
    component: ContabilidadComponent  
  },
  {
    path: 'facturacion',
    component: FacturacionComponent  
  },
  {
    path: 'documentos',
    component: DocumentosComponent  
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FinanzasRoutingModule { }
