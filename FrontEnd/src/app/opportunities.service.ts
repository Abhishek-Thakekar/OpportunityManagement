import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunities } from './opportunities';
import { Manager } from "./manager";
import { Audits } from './audits';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  private baseURL = environment.baseURL;
  constructor(private httpClient: HttpClient) {}
  getOpportunities(): Observable<Opportunities[]> {
    return this.httpClient.get<Opportunities[]>(`${this.baseURL}`);
  }
  getAudits(): Observable<Audits[]> {
    return this.httpClient.get<Audits[]>(`${this.baseURL}/audits`);
  }
  createOpportunity(opportunity: Opportunities): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, opportunity);
  }
  getOpportunityById(id: number): Observable<Opportunities> {
    return this.httpClient.get<Opportunities>(`${this.baseURL}/id/${id}`);
  }
  getOpportunitiesByEmail(memail: string): Observable<Opportunities[]> {
    return this.httpClient.get<Opportunities[]>(
      `${this.baseURL}/email/${localStorage.getItem('useremail')}`
    );
  }
  updateOpportunity(
    id: number,
    opportunity: Opportunities
  ): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, opportunity);
  }
  deleteOpportunity(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  private baseURL_1 = environment.baseURL_1;
  createManager(manager: Manager): Observable<object> {
    return this.httpClient.post(`${this.baseURL_1}`, manager);
  }
}
