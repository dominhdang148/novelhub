import { MenuItem } from '../models/menu-item';

export const HEADER_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: 'Search',
    url: '/search',
    icon: {
      library: 'fas',
      name: 'search',
    },
  },
  {
    id: 2,
    title: 'Categories',
    url: '/categories',
    icon: {
      library: 'fas',
      name: 'list',
    },
  },
  {
    id: 3,
    title: 'Tags',
    url: '/tags',
    icon: {
      library: 'fas',
      name: 'tag',
    },
  },
  {
    id: 4,
    title: 'Updates',
    url: '/updates',
    icon: {
      library: 'fas',
      name: 'flag-checkered',
    },
  },
];
