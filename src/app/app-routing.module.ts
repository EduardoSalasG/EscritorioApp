import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SubMenu1Component } from './pages/sub-menu1/sub-menu1.component';
import { SubMenu2Component } from './pages/sub-menu2/sub-menu2.component';
import { SubMenu3Component } from './pages/sub-menu3/sub-menu3.component';
import { SubMenu4Component } from './pages/sub-menu4/sub-menu4.component';
import { SubMenu5Component } from './pages/sub-menu5/sub-menu5.component';
import { SubMenu6Component } from './pages/sub-menu6/sub-menu6.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'submenu1',
    component: SubMenu1Component
  },
  {
    path: 'submenu2',
    component: SubMenu2Component
  },
  {
    path: 'submenu3',
    component: SubMenu3Component
  },
  {
    path: 'submenu4',
    component: SubMenu4Component
  },
  {
    path: 'submenu5',
    component: SubMenu5Component
  },
  {
    path: 'submenu6',
    component: SubMenu6Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ventas',
    loadChildren: ()=>import('./opmenu/ventas/ventas-routing.module').then(mod=>mod.VentasRoutingModule)
  },
  {
    path: 'recursos-humanos',
    loadChildren: ()=>import('./opmenu/rrhh/rrhh-routing.module').then(mod=>mod.RrhhRoutingModule)
  },
  {
    path: 'finanzas',
    loadChildren: ()=>import('./opmenu/finanzas/finanzas-routing.module').then(mod=>mod.FinanzasRoutingModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
