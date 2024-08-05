import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../AuthGuard';

export const admin: Routes = [
 {path:'users',children:[ 
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.UserCreateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_OWNER'] }
  },
  {
    path: ':id',
    loadComponent: () =>
    import('./update/update.component').then((m) => m.USerUpdateComponent),
    canActivate: [AuthGuard], data: { roles: [ 'SM_ADMIN'] }
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
  static routes = admin;
}