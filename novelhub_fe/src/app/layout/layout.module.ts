import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
