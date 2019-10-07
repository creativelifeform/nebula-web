import '../style/style.scss';

import { AnalyticsProvider, GdprConsentProvider } from '../context';

import App from 'next/app';
import { Layout } from '../components';
import React from 'react';
import Router from 'next/router';
import routes from '../content/routes';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const pathname = Router.router ? Router.router.pathname : undefined;

    return (
      <GdprConsentProvider>
        <AnalyticsProvider pathname={pathname}>
          <Layout routes={routes}>
            <Component {...pageProps} />
          </Layout>
        </AnalyticsProvider>
      </GdprConsentProvider>
    );
  }
}

export default MyApp;
