import { About, Guide, Home, Pricing } from '../ui/components';

export default [
  {
    title: 'Nebula - A 3D Particle System Designer For The Web',
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'Visually Design Distributable 3D Particle Systems With Nebula',
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    title: "Pricing For Nebula's Free and Pro Plans",
    name: 'Pricing',
    path: '/pricing',
    component: Pricing,
  },
  {
    title:
      'A User Guide & Manual For Designing 3D Particle Systems With Nebula',
    name: 'Guide',
    path: '/guide',
    component: Guide,
  },
];
