import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermofserviceComponent } from './termofservice.component';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: TermofserviceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermofserviceRoutingModule {}
