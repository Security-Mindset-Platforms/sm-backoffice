export const environment = {
  production: true,
  urlAPi: window["env"]["apiUrl"] || 'https://api-keycloak.security-hub.io',
  apiKey: window["env"]["API_KEY"],
  keycloak: {
    realm: 'security-mindset',
    clientId: 'sm-backoffice',
    url: 'https://connect.security-hub.io/'
}
};
