import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'',children:[ {
  path: 'dashboard',
  loadComponent: () =>
    import('./dashboard.component').then((m) => m.DashboardComponent),
},
{
  path: '',
  loadComponent: () =>
    import('./dashboard.component').then((m) => m.DashboardComponent),
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