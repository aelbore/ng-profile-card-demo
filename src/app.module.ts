import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DemoAppComponent } from './app.component';
import { DemoAppService} from './app.service';

@NgModule({
  imports: [ CommonModule, BrowserModule ],
  declarations: [ DemoAppComponent ],
  providers: [ DemoAppService ],
  exports: [ DemoAppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DemoAppModule { }