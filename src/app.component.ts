import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { DemoAppService } from './app.service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class DemoAppComponent implements OnInit {
  
  profiles: Observable<any[]> | any;

  constructor(private appService: DemoAppService) { }

  ngOnInit() {
    this.profiles = this.appService.getProfiles();
  }

}