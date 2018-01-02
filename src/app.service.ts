import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DemoAppService { 

  constructor(private http: Http) { }

  getProfiles(): Observable<any[]> {
    return this.http.get('/api/profiles')
      .map((res: Response): any[] => res.json());
  }

}