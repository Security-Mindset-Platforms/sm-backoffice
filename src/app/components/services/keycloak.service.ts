// src/app/services/keycloak.service.ts
import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak: Keycloak.KeycloakInstance;

  constructor() {
    this.keycloak = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'master',
        clientId: 'security-admin-console'
    });
  }

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
        if (authenticated) {
          resolve();
        } else {
          reject('Not authenticated');
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }

  isAuthenticated(): boolean {
    return this.keycloak.authenticated || false;
  }

  getToken(): string {
    return this.keycloak.token || '';
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }

  getKeycloakInstance(): Keycloak.KeycloakInstance {
    return this.keycloak;
  }
}
