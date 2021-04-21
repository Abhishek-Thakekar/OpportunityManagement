import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunities } from './opportunities';
import { Manager } from "./manager";

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  private baseURL = 'http://localhost:8080/api/opportunity/opportunities';
  constructor(private httpClient: HttpClient) {}

  getOpportunities(): Observable<Opportunities[]> {
    return this.httpClient.get<Opportunities[]>(`${this.baseURL}`);
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


  private baseURL_1 = 'http://localhost:8080/api/manager/managers';
  createManager(manager: Manager): Observable<object> {
    return this.httpClient.post(`${this.baseURL_1}`, manager);
  }
}
