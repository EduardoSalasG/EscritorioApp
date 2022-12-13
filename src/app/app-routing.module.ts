import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard'
import { CambiarRolComponent } from './pages/cambiar-rol/cambiar-rol.component';
import { CambiarOpMenuComponent } from './pages/cambiar-op-menu/cambiar-op-menu.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ventas',
    loadChildren: ()=>import('./opmenu/ventas/ventas-routing.module').then(mod=>mod.VentasRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recursos-humanos',
    loadChildren: ()=>import('./opmenu/rrhh/rrhh-routing.module').then(mod=>mod.RrhhRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'finanzas',
    loadChildren: ()=>import('./opmenu/finanzas/finanzas-routing.module').then(mod=>mod.FinanzasRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cambiar-rol',
    component: CambiarRolComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cambiar-opciones-de-menu',
    component: CambiarOpMenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
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
