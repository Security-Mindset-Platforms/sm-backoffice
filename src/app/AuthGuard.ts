import { Injectable } from '@angular/core';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

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

  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const expectedRoles = route.data['roles'];
    
    // Vérifie si l'utilisateur est authentifié
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
      return false;  // Ne permet pas l'accès jusqu'à ce que l'utilisateur soit authentifié
    }

    // Vérifie si des rôles sont requis pour cette route
    if (!Array.isArray(expectedRoles) || expectedRoles.length === 0) {
      return true;
    }

    // Vérifie si l'utilisateur possède tous les rôles requis
    const hasAllRoles = expectedRoles.every((role) => this.roles.includes(role));
    
    // Redirige vers le tableau de bord si l'utilisateur n'a pas les rôles nécessaires
    if (!hasAllRoles) {
      this.router.navigate(['dashboard']);
      return false;
    }

    // L'utilisateur est authentifié et a les rôles nécessaires
    return true;
  }
}
