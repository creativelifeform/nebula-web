import '../style/style.scss';

import { AnalyticsProvider, GdprConsentProvider } from '../context';

import App from 'next/app';
import { COOKIE_KEY_GDPR_CONSENT } from '../common/constants';
import { Layout } from '../components';
import React from 'react';
import Router from 'next/router';
import nextCookies from 'next-cookies';
import routes from '../content/routes';

class MyApp extends App {
  /**
   * Manages the server side check for the COOKIE_KEY_GDPR_CONSENT cookie.
   *
   */
  static async getInitialProps({ ctx }) {
    const hasGdprConsent = nextCookies(ctx)[COOKIE_KEY_GDPR_CONSENT] || true;

    return {
      hasGdprConsent:
        typeof hasGdprConsent === 'string'
          ? JSON.parse(hasGdprConsent)
          : hasGdprConsent,
    };
  }

  render() {
    const { Component, hasGdprConsent, ...pageProps } = this.props;
    const pathname = Router.router ? Router.router.pathname : undefined;

    return (
      <GdprConsentProvider hasGdprConsent={hasGdprConsent}>
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
