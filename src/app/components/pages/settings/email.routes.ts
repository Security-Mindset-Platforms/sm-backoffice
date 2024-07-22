import { Route } from '@angular/router';
export default [
   
      ] as Route[];
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
    
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class mailRoutingModule {
        static routes = admin;
      }