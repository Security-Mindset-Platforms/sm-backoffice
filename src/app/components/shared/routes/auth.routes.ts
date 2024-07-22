import { RouterModule, Routes } from '@angular/router';
import { admin, authenticationRoutingModule } from '../../pages/authentication/authentication.routes';
import { resetpasswordRoutingModule } from '../../pages/authentication/reset-password/reset-password.routes';
import { signinRoutingModule } from '../../pages/authentication/signin/signin.routes';
import { errorRoutingModule } from '../../error/error.routes';
import { NgModule } from '@angular/core';

export const authen: Routes = [
    { path: '', children: [
        ...authenticationRoutingModule.routes,
        ...resetpasswordRoutingModule.routes,
        ...signinRoutingModule.routes,
        ...errorRoutingModule.routes
 ] },
    // {
    //     path: 'auth/login',
    //     loadComponent: () =>
    //       import('../../authentication/login/login.component').then((m) => m.LoginComponent),
    //   },

 
]
@NgModule({
    imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class AuthenticationsRoutingModule { }