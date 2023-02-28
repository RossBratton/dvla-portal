import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleDetails } from '../models/vehicle-details.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = "API_URL";
  }

  getVehicleDetails(registrationNumber: string): Observable<VehicleDetails> {
    const res$ = this.http.get<VehicleDetails>(`${this.apiUrl}/${registrationNumber}`);
    return res$;
  }
}
