export const environment = {
  production: true,
  urlAPi: window["env"]["apiUrl"] || 'https://api-keycloak.security-mindset.fr',
  apiKey: window["env"]["API_KEY"],
  keycloak: {
    realm: 'security-mindset',
    clientId: 'sm-backoffice',
    url: 'https://test.security-mindset.fr/'
}
};
