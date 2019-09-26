import '../style/style.scss';

import { AnalyticsProvider, Layout } from '../components';

import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import { UA_ID } from '../common/config';
import routes from '../content/routes';
import withAnalytics from 'next-ga';

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

export default withAnalytics(UA_ID, Router)(MyApp);
