const content = {
  favicon: {
    title: 'Nebula',
    description: 'Design 3D particle systems for the web',
    url: 'https://getnebula.app',
    twitterName: 'nebula',
    twitterImage: '',
  },
  callout: {
    small: 'Download',
    large: 'Try Nebula For Free',
  },
  home: {
    title: 'Design particle systems for the web.',
    text:
      'Design rich, eye-catching 3D particle systems and effects for any JavaScript application on Windows, Mac or Linux — with Nebula.',
  },
  about: {
    title: 'About Nebula',
    text:
      'Use the Nebula ecosystem and deliver fantastic, eye-catching visual effects for your users',
  },
  download: {
    title: 'Download',
    text: 'Download Nebula for Windows, Mac or Linux',
  },
  privacy: {
    title: 'Privacy Policy',
    text: 'Our Privacy Policy',
  },
  editions: {
    title: 'Editions',
    text:
      'All the different ways you can start designing 3D particle systems for the web with Nebula',
    features: [
      {
        title: 'Emitters',
        text: 'The number of particle emitters supported',
        inAlpha: '3 Emitters',
        inCommunity: 'Unlimited',
        inPro: 'Unlimited',
      },
      // {
      //   title: 'Projects',
      //   text: 'The number of projects you can have',
      //   inAlpha: 'Local: unlimitied, Cloud: 0',
      //   inCommunity: 'Local: unlimited, Cloud: 5',
      //   inPro: 'Local: unlimited, Cloud: unlimited',
      // },
      {
        title: 'Voyager Access',
        text:
          'Access to the Voyager community platform where you can download, and share your particle systems with others',
        inAlpha: false,
        inCommunity: true,
        inPro: true,
      },
      {
        title: 'Voyager Pro Access',
        text:
          'Access to the Voyager Pro community where you can download the greatest particle systems shared by other advanced, pro users',
        inAlpha: false,
        inCommunity: false,
        inPro: true,
      },
      {
        title: 'Bug Fixes',
        text: 'Patch updates for bugs',
        inAlpha: true,
        inCommunity: true,
        inPro: true,
      },
      {
        title: 'Community Updates',
        text: 'Access to new versions of the app with some basic new features',
        inAlpha: false,
        inCommunity: true,
        inPro: true,
      },
      {
        title: 'Pro Updates',
        text:
          'Access to new versions of the app which include community features as well as more advanced and powerful stuff!',
        inAlpha: false,
        inCommunity: false,
        inPro: true,
      },
      {
        title: 'Support',
        text: 'Email support for usage and troubleshooting questions',
        inAlpha: false,
        inCommunity: false,
        inPro: true,
      },
    ],
  },
  guides: {
    title: 'Guides',
    text: 'Instructions on how to use Nebula',
    sidebar: {
      title: 'Guides',
      items: [
        {
          title: 'Installation',
          link: 'installation',
          items: [
            {
              title: 'Windows',
              link: 'windows',
            },
            {
              title: 'Mac OS',
              link: 'mac-os',
            },
            {
              title: 'Linux',
              link: 'linux',
            },
          ],
        },
      ],
    },
  },
};

const { home, about, download, editions } = content;

export const pages = [home, about, download, editions];

export default content;
