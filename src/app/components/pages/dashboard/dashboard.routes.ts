import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../AuthGuard';

export const admin: Routes = [
 {path:'',children:[ {
  path: 'dashboard',
  loadComponent: () =>
    import('./dashboard.component').then((m) => m.DashboardComponent),
  canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
},
{
  path: '',
  loadComponent: () =>
    import('./dashboard.component').then((m) => m.DashboardComponent),
  canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin),],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  static routes = admin;
}