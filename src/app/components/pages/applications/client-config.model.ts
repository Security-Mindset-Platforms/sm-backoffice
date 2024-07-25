export interface ClientConfig {
    clientId: string;
    clientSecret: string;
    rootUrl: string;
    homeUrl: string;
    validRedirectUris: string[];
    validPostLogoutUris: string[];
    webOrigins: string[];
    defaultClientScopes: string[];
    optionalClientScopes: string[];
    name: string;
    description: string;
    photos: string;
    tags: string[];
  }
  