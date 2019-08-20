import '../style/style.scss';

import App from 'next/app';
import { Layout } from '../components';
import React from 'react';
import routes from '../content/routes';

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

export default MyApp;
