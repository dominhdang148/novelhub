import { Component } from '@angular/core';
import { HEADER_MENU_ITEMS } from 'src/app/shared/constants/header-menu-items';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuItems: MenuItem[] = HEADER_MENU_ITEMS;
}
