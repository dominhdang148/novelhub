import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmcaRoutingModule } from './dmca-routing.module';
import { DmcaComponent } from './dmca.component';


@NgModule({
  declarations: [
    DmcaComponent
  ],
  imports: [
    CommonModule,
    DmcaRoutingModule
  ]
})
export class DmcaModule { }
