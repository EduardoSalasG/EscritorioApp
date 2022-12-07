import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm/crm.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PosComponent } from './pos/pos.component';
import { SacComponent } from './sac/sac.component';
import { VentasHomeComponent } from './ventas-home/ventas-home.component';

const routes:Routes = [

  {
    path: 'home',
    component: VentasHomeComponent  
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crm',
    component: CrmComponent
  },
  {
    path: 'pos',
    component: PosComponent
  },
  {
    path: 'marketing',
    component: MarketingComponent
  },
  {
    path: 'servicio-al-cliente',
    component: SacComponent
  },
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ]
})
export class VentasRoutingModule { }
