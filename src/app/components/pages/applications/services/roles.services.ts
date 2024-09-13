import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiUrl = environment.urlAPi+'/api/v1/applications/security-mindset'; 
  constructor(private http: HttpClient) {}

  gerRoles(appId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${appId}/profile`);
  }
  getApplications(realm: string): Observable<any>{
    const uri  = environment.urlAPi+'/api/v1/applications'; 
    return this.http.get(`${uri}/${realm}/clients`);
  }


}
