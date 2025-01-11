import { FaIcon } from './fa-icon';

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon?: FaIcon;
}
