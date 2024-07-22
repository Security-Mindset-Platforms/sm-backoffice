export const environment = {
  production: true,
  urlAPi: window["env"]["apiUrl"] || 'https://api-keycloak.security-mindset.fr',
  apiKey: window["env"]["API_KEY"],
  realm: "master",
  jwt: '',
  userID: "4ceed46f-d335-4477-8781-cba823d33b6e"
};
