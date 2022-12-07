import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanzasModule } from './finanzas/finanzas.module';
import { RrhhModule } from './rrhh/rrhh.module';
import { VentasModule } from './ventas/ventas.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinanzasModule,
    RrhhModule,
    VentasModule
  ]
})
export class OpmenuModule { }
