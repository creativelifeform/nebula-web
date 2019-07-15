import { About, Download, Editions, Guide, Home } from '../ui/components';

import { DOWNLOAD_PATH } from './constants';

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
    title: 'The Different Flavours Of Nebula',
    name: 'Editions',
    path: '/editions',
    component: Editions,
  },
  {
    title:
      'A User Guide & Manual For Designing 3D Particle Systems With Nebula',
    name: 'Guide',
    path: '/guide',
    component: Guide,
  },
  {
    title: 'Download Nebula for Windows, Mac or Linux Today',
    name: 'Download',
    path: '/download',
    component: Download,
    shouldHideFromNav: true,
  },
];

export { default as ScrollToTop } from './ScrollToTop';
export { DOWNLOAD_PATH };
