import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '@data-dashboard/models';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'https://localhost:7256/api'; 

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.apiUrl}/policy`);
  }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${this.apiUrl}/policy`, policy);
  }

  updatePolicy(policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${this.apiUrl}/policy/${policy.id}`, policy);
  }

  deletePolicy(policyId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/policy/${policyId}`);
  }
}
