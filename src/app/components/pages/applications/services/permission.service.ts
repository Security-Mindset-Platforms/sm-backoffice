import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from '../update/update.component';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private apiUrl =  environment.urlAPi+'/api/v1/permissions';  

  constructor(private http: HttpClient) {}

  getPermissions(featureId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/app/${featureId}`);
  }

  addPermission(permission: Permission): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, permission);
  }

  updatePermission(id: string, permission: Permission): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, permission);
  }

  deletePermission(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
