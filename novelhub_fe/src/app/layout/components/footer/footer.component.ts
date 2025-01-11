import { Component } from '@angular/core';
import { FOOTER_MENU_ITEMS } from 'src/app/shared/constants/footer-menu-items';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  menuItems: MenuItem[] = FOOTER_MENU_ITEMS;
}
