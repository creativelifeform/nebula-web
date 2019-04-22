import { About, Home } from '../ui/components';

export default [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
  {
    title: 'Pricing',
    path: '/pricing',
    component: About,
  },
  {
    title: 'Guide',
    path: '/guide',
    component: About,
  },
];
