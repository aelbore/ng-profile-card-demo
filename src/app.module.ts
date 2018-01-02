import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DemoAppComponent } from './app.component';
import { DemoAppService} from './app.service';

@NgModule({
  imports: [ CommonModule, BrowserModule, HttpModule ],
  declarations: [ DemoAppComponent ],
  providers: [ DemoAppService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ DemoAppComponent ]
})
export class DemoAppModule { }