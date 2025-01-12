import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmcaComponent } from './dmca.component';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DmcaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmcaRoutingModule {}
