import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyHolder } from '@data-dashboard/models';
@Injectable({
  providedIn: 'root'
})
export class PolicyHolderService {
  private apiUrl = 'https://localhost:7256/api'; 
  
  constructor(private http: HttpClient) { }

  getPolicyHolders(): Observable<PolicyHolder[]> {
    return this.http.get<PolicyHolder[]>(`${this.apiUrl}/policyholder`);
  } 
}
