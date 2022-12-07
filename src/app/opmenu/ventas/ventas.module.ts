import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm/crm.component';
import { PosComponent } from './pos/pos.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SacComponent } from './sac/sac.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasHomeComponent } from './ventas-home/ventas-home.component';



@NgModule({
  declarations: [
    CrmComponent,
    PosComponent,
    MarketingComponent,
    SacComponent,
    VentasHomeComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
