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
export class BusinessService {
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


  userProfile(userID: any, realm): Observable<any>{
    return this.httpClient.get(EndPoints.USER_PROFIL_URI+realm+"/user/"+userID,  this.options);
  }
  editUserProfil(userID: any, data: any, realm): Observable<any>{
    return this.httpClient.put(EndPoints.USER_PROFIL_URI+realm+"/user/"+userID,data,  this.options);
  }

}
