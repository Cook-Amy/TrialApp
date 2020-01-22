import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  countryEndpoint: string = 'countries';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${environment.serverUrl + this.countryEndpoint}`);
  }
}
