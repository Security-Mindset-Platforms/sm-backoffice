import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../update/update.component';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private apiUrl = environment.urlAPi+'/api/v1/features'; 

  constructor(private http: HttpClient) {}

  getFeatures(appId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/app/${appId}`);
  }

  addFeature(feature: Feature): Observable<Feature> {
    return this.http.post<any>(`${this.apiUrl}/add`, feature);
  }

  updateFeature(id: string, feature: Feature): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, feature);
  }

  deleteFeature(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
