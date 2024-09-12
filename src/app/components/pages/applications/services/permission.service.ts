import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from '../update/update.component';


@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private apiUrl = 'http://localhost:8080/api/permissions'; 

  constructor(private http: HttpClient) {}

  getPermissions(featureId: string): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.apiUrl}/feature/${featureId}`);
  }

  addPermission(permission: Permission): Observable<Permission> {
    return this.http.post<Permission>(`${this.apiUrl}/add`, permission);
  }

  updatePermission(id: string, permission: Permission): Observable<Permission> {
    return this.http.put<Permission>(`${this.apiUrl}/update/${id}`, permission);
  }

  deletePermission(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
