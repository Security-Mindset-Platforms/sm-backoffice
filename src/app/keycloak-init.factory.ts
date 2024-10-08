import { KeycloakService } from "keycloak-angular";
import { environment } from "../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService) {

    return () =>
        keycloak.init({
            config: {
                url: environment.keycloak.url,
                realm: environment.keycloak.realm,
                clientId: environment.keycloak.clientId,
            },
            initOptions: {
                checkLoginIframe: false,
                onLoad: 'check-sso', // 'login-required' , 'check-sso'
                silentCheckSsoRedirectUri:
                  window.location.origin + '/assets/silent-check-sso.html'
              },
              enableBearerInterceptor: true
        });
}