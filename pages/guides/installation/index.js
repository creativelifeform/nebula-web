import React, { Component } from 'react';

import { Guides } from '../../../components';
import { PLATFORM } from '../../../components/Download/constants';
import Router from 'next/router';

const DEFAULT_GUIDE = (() => {
  if (PLATFORM === 'win') {
    return 'windows';
  }

  if (PLATFORM === 'linux') {
    return 'linux';
  }

  if (PLATFORM === 'osx') {
    return 'mac-os';
  }

  return 'windows';
})();

class InstallationGuide extends Component {
  componentDidMount() {
    Router.push(`/guides/installation/${DEFAULT_GUIDE}`);
  }

  render() {
    return <Guides />;
  }
}

export default InstallationGuide;
