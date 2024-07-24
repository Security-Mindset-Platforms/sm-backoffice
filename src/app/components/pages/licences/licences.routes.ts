import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'licences',children:[ 
  {
    path: 'add/:id',
    loadComponent: () =>
    import('./add/add.component').then((m) => m.LicenceAddComponent),
  },
  

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class LicencesRoutingModule {
  static routes = admin;
}