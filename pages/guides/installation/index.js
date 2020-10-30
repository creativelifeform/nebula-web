import React, { Component } from 'react';

import { Guides } from '../../../components';
import Router from 'next/router';

const DEFAULT_GUIDE = 'windows';

class InstallationGuide extends Component {
  componentDidMount() {
    Router.push(`/guides/installation/${DEFAULT_GUIDE}`);
  }

  render() {
    return <Guides />;
  }
}

export default InstallationGuide;
