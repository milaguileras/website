import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from './lead';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = ''
  constructor(private _http: HttpClient) { }

  enroll(lead: Lead){
    return this._http.post<any>(this._url, lead);
  }
}
