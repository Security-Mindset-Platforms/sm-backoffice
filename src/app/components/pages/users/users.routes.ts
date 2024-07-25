import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'users',children:[ 
  {
    path: 'create',
    loadComponent: () =>
    import('./create/create.component').then((m) => m.UserCreateComponent),
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