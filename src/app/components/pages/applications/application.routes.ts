import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../AuthGuard';

export const admin: Routes = [
 {path:'applications',children:[ 
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.ApplicationCreateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },
  {
    path: ':id',
    loadComponent: () =>
    import('./update/update.component').then((m) => m.ApplicationUpdateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_USER'] }
  },
  {
    path: '',
    loadComponent: () =>
    import('./list/list.component').then((m) => m.ApplicationListComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_USER'] }
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