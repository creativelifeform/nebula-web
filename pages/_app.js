import '../style/style.scss';

import { AnalyticsProvider, Layout } from '../components';

import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import routes from '../content/routes';

class MyApp extends App {
  render() {
    const { Component, pageProps, analytics } = this.props;
    const pathname = Router.router ? Router.router.pathname : undefined;

    return (
      <AnalyticsProvider api={analytics} pathname={pathname}>
        <Layout routes={routes}>
          <Component {...pageProps} />
        </Layout>
      </AnalyticsProvider>
    );
  }
}

export default MyApp;
