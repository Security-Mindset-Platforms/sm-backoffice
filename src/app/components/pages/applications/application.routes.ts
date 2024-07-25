import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'applications',children:[ 
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.ApplicationCreateComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
    import('./update/update.component').then((m) => m.ApplicationUpdateComponent),
  },
  {
    path: '',
    loadComponent: () =>
    import('./list/list.component').then((m) => m.ApplicationListComponent),
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {
  static routes = admin;
}