import { Injectable } from '@angular/core';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import {ActivatedRouteSnapshot,RouterStateSnapshot, Router, UrlTree} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard extends KeycloakAuthGuard {
  
    constructor(
      protected override readonly router: Router,
      protected readonly keycloak: KeycloakService
    ) {
      super(router, keycloak);
    }
  
    async isAccessAllowed( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree> 
    {
      if (!this.authenticated) {
        await this.keycloak.login({
          redirectUri: window.location.origin + state.url
        });
        
      }

      

      console.log('role restriction given at app-routing.module for this route', route.data['roles']);
      console.log('User roles coming after login from keycloak :', this.roles);
     
    // Get the roles required from the route.
      const requiredRoles = route.data['roles'];

      // Allow the user to proceed if no additional roles are required to access the route.
      if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
        return true;
      }
  
      // Allow the user to proceed if all the required roles are present.
       requiredRoles.every((role) => this.roles.includes(role));
       return this.authenticated; 

    }
   
  }






