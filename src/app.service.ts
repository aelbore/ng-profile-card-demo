import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DemoAppService { 

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any[]> {
    return this.http.get('/api/profiles.json')
      .map((res: HttpResponse<any[]>): any[] => res.body); 
  }

}