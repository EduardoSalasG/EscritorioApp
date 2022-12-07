import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { GastosComponent } from './gastos/gastos.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { FinanzasRoutingModule } from './finanzas-routing.module';
import { FinanzasHomeComponent } from './finanzas-home/finanzas-home.component';



@NgModule({
  declarations: [
    ContabilidadComponent,
    FacturacionComponent,
    GastosComponent,
    DocumentosComponent,
    FinanzasHomeComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule
  ]
})
export class FinanzasModule { }
