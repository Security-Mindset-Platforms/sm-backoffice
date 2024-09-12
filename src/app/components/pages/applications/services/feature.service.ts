import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../update/update.component';


@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private apiUrl = 'http://localhost:8080/api/features'; // API Backend URL

  constructor(private http: HttpClient) {}

  getFeatures(appId: string): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.apiUrl}/app/${appId}`);
  }

  addFeature(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(`${this.apiUrl}/add`, feature);
  }

  updateFeature(id: string, feature: Feature): Observable<Feature> {
    return this.http.put<Feature>(`${this.apiUrl}/update/${id}`, feature);
  }

  deleteFeature(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
