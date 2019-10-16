const content = {
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
          'Access to the Voyager community platform when you can download, and share your particle systems with others',
        inAlpha: false,
        inCommunity: true,
        inPro: true,
      },
      {
        title: 'Bug Fixes',
        text: 'Patch updates for critical bugs',
        inAlpha: false,
        inCommunity: true,
        inPro: true,
      },
      {
        title: 'Updates',
        text:
          'Access to new versions of the application with new and improved features',
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
};

const { home, about, download, editions } = content;

export const pages = [home, about, download, editions];

export default content;
