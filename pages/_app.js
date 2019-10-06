import '../style/style.scss';

import { AnalyticsProvider, Layout } from '../components';

import App from 'next/app';
import React from 'react';
import routes from '../content/routes';

class MyApp extends App {
  render() {
    const { Component, pageProps, analytics } = this.props;

    return (
      <AnalyticsProvider api={analytics}>
        <Layout routes={routes}>
          <Component {...pageProps} />
        </Layout>
      </AnalyticsProvider>
    );
  }
}

export default MyApp;
