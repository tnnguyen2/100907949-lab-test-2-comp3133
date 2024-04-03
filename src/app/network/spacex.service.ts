import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mission} from "../models/mission";

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }
  getLaunchDetails(flightNumber: string): Observable<Mission> {
    const url = `${this.apiUrl}/${flightNumber}`;
    return this.http.get<Mission>(url);
  }
  getLaunchesByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}?launch_year=${year}`);
  }

}
