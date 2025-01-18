import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermofserviceRoutingModule } from './termofservice-routing.module';
import { TermofserviceComponent } from './termofservice.component';


@NgModule({
  declarations: [
    TermofserviceComponent
  ],
  imports: [
    CommonModule,
    TermofserviceRoutingModule
  ]
})
export class TermofserviceModule { }
