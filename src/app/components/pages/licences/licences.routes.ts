import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../AuthGuard';

export const admin: Routes = [
 {path:'licences',children:[ 
  {
    path: 'add/:id',
    loadComponent: () =>
    import('./add/add.component').then((m) => m.LicenceAddComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },
  {
    path: '',
    loadComponent: () =>
    import('./liste/liste.component').then((m) => m.LicenceListComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  }
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class LicencesRoutingModule {
  static routes = admin;
}