import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../AuthGuard';

export const admin: Routes = [
 {path:'organizations',children:[ 
  {
    path: '',
    loadComponent: () =>
    import('./list/organizationsList.component').then((m) => m.OrganizationsListComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.OrganizationCreateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },
  {
    path: ':id',
    loadComponent: () =>
    import('./update/update.component').then((m) => m.OrganizationUpdateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class OrganizationsRoutingModule {
  static routes = admin;
}