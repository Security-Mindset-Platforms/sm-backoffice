// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export interface AuthInfo {
  userId: string | undefined;
  realm: string | undefined;
  token: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  async getAuthInfo(): Promise<AuthInfo> {
    // Assurez-vous que Keycloak est initialisé
    await this.keycloakService.isLoggedIn();

    // Créez et retournez l'objet contenant les informations d'authentification
    return {
      userId: this.keycloakService.getKeycloakInstance().subject,
      realm: this.keycloakService.getKeycloakInstance().realm,
      token: await this.keycloakService.getToken(),
    };
  }
}
