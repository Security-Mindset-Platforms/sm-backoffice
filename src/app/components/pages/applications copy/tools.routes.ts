import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'applications',children:[ {
  path: '',
  loadComponent: () =>
    import('./applicationsList/applicationsList.component').then((m) => m.ApplicationsListComponent),
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class toolsRoutingModule {
  static routes = admin;
}