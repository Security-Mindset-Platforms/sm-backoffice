import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloak: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
  logout(): Promise<void>  {
    return this.keycloak.logout().then(() => this.keycloak.clearToken());
  }
  getUserProfile(): any {
    return this.keycloak.loadUserProfile();
  }
  // Add other methods as needed for token access, user info retrieval, etc.}
}