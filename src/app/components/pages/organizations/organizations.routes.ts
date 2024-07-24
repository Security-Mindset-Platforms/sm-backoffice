import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'organizations',children:[ 
  {
    path: '',
    loadComponent: () =>
    import('./list/organizationsList.component').then((m) => m.OrganizationsListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.OrganizationCreateComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
    import('./update/update.component').then((m) => m.OrganizationUpdateComponent),
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