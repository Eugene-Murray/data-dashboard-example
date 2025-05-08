import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyTypeDetail } from '@wtw/models';


@Injectable({
  providedIn: 'root'
})
export class PolicyTypeDetailService {
  private apiUrl = 'https://localhost:7256/api'; 

  constructor(private http: HttpClient) { }

  getPolicyTypeDetails(): Observable<PolicyTypeDetail[]> {
    return this.http.get<PolicyTypeDetail[]>(`${this.apiUrl}/policytypedetails`);
  }
}
