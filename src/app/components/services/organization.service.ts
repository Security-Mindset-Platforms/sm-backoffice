import { Injectable,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndPoints } from '../endpoints/endpoints';
import { environment } from '../../../environments/environment';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  authState: any;
  afAuth: any;
  afs: any;
  public showLoader:boolean=false;
  vheaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'X-API-Key': environment.apiKey,
  });
  options = { headers: this.vheaders };
  constructor(private httpClient: HttpClient, private router: Router,public ngZone: NgZone) {
  }

  encodeData(data: any): string {
    return Object.keys(data).map(key => 
      encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    ).join('&');
  }

  organizationList(): Observable<any>{
    return this.httpClient.get(EndPoints.ORGANIZATION_URI,  this.options);
  }
  createOrganization(data: any): Observable<any>{
    return this.httpClient.post(EndPoints.ORGANIZATION_URI,data,  this.options);
  }
  deleteOrganization(id: any): Observable<any>{
    return this.httpClient.delete(EndPoints.ORGANIZATION_URI+"/"+id,  this.options);
  }
  getOrganization(id: any): Observable<any>{
    return this.httpClient.get(EndPoints.ORGANIZATION_URI+"/"+id,  this.options);
  }
  loginCli(token: any): Observable<any>{
    return this.httpClient.post(EndPoints.ORGANIZATION_URI+"/cli/login/"+token,  this.options);
  }
  domainList(): Observable<any>{
    return this.httpClient.get(EndPoints.DOMAIN_URI,  this.options);
  }
  generateCliToken(id: any): Observable<any>{
    return this.httpClient.post(EndPoints.ORGANIZATION_URI+"/token/generate/"+id,  this.options);
  }
  applicationsList(realm: string): Observable<any>{
    return this.httpClient.get(EndPoints.APPLICATIONS_URI+"applications/"+realm+"/clients",  this.options);
  }

  // licence
  createLicence(data:any ): Observable<any>{
    return this.httpClient.post(EndPoints.LICENCE_URI,data,  this.options);
  }
  deleteLicence(id:any ): Observable<any>{
    return this.httpClient.delete(EndPoints.LICENCE_URI+"/"+id,  this.options);
  }

  renewLicence(id:any, year: any ): Observable<any>{
    return this.httpClient.put(EndPoints.LICENCE_URI+"/renew/"+id+"/year/"+ year,  this.options);
  }

  retrieveValidLicence(): Observable<any>{
    return this.httpClient.get(EndPoints.LICENCE_URI+"/valid",  this.options);
  }

  retrieveNonValidLicence(): Observable<any>{
    return this.httpClient.get(EndPoints.LICENCE_URI+"/invalid",  this.options);
  }

  // user
  allUserList(): Observable<any>{
    return this.httpClient.get(EndPoints.USER_URI,  this.options);
  }
  allUserByOrganizationList(): Observable<any>{
    return this.httpClient.get(EndPoints.USER_URI,  this.options);
  }
  createUser(data: any, realm: string,organizationId: any, type: string): Observable<any>{
    return this.httpClient.post(EndPoints.USER_URI+"/realms/"+realm+"/create/"+ +organizationId+"/"+type,data,  this.options);
  }
  updateUser(data: any, realm: string,organizationId: any, type: string,  id: any): Observable<any>{
    return this.httpClient.put(EndPoints.USER_URI+"/realms/"+realm+"/update/"+id + "/" + organizationId+"/"+type,data,  this.options);
  }

  enableDisableUser(realm: string, id: any, action: any): Observable<any>{
    return this.httpClient.put(EndPoints.USER_URI+"/realms/"+realm+"/"+id+"/"+action,  this.options);
  }
  deleteAccount(realm: string, id: any): Observable<any>{
    return this.httpClient.delete(EndPoints.USER_URI+"/realms/"+realm+"/"+id+"/delete",  this.options);
  }

  globalStats(): Observable<any>{
    return this.httpClient.get(EndPoints.STAT_URI,  this.options);
  }

  userProfile(userID: any): Observable<any>{
    return this.httpClient.get(EndPoints.USER_PROFIL_URI+userID,  this.options);
  }
  editUserProfil(userID: any, data: any): Observable<any>{
    return this.httpClient.put(EndPoints.USER_PROFIL_URI+userID,data,  this.options);
  }

  // application
  createApplication(data: any, realm: string): Observable<any>{
    return this.httpClient.post(environment.urlAPi+ EndPoints.BASE_URI+"applications/"+realm,data,  this.options);
  }
 updateApplication(data: any, realm: string): Observable<any>{
    return this.httpClient.put(environment.urlAPi+ EndPoints.BASE_URI+"applications/"+realm,data,  this.options);
  }

  deleteApplication(id: any, realm: string): Observable<any>{
    return this.httpClient.delete(environment.urlAPi+ EndPoints.BASE_URI+"applications/realm/"+realm+"/"+id,  this.options);
  }
  applicationDetail(id: any): Observable<any>{
    return this.httpClient.get(environment.urlAPi+ EndPoints.BASE_URI+"applications/"+id,  this.options);
  }
}
