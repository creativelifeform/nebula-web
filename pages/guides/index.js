import React, { Component } from 'react';

import { Guides } from '../../components';
import Router from 'next/router';

const DEFAULT_GUIDE = 'installation';

class GuidesPage extends Component {
  componentDidMount() {
    Router.push(`/guides/${DEFAULT_GUIDE}`);
  }

  render() {
    return <Guides />;
  }
}

export default GuidesPage;
