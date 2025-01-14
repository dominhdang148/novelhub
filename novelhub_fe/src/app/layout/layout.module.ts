import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from '../features/home/home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
  exports: [MainLayoutComponent],
})
export class LayoutModule {
  constructor() {
    library.add;
  }
}
