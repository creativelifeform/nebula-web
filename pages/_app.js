import '../style/style.scss';

import App from 'next/app';
import { Layout } from '../components';
import React from 'react';
import Router from 'next/router';
import { UA_ID } from '../common/config';
import routes from '../content/routes';
import withAnalytics from 'next-ga';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout routes={routes}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default withAnalytics(UA_ID, Router)(MyApp);
