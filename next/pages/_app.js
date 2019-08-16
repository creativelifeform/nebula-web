import '../style/style.scss';

import { Footer, Header } from '../common/components';

import App from 'next/app';
import React from 'react';
import routes from '../content/routes';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <main className="App">
        <Header routes={routes} />
        <Component {...pageProps} />
        <Footer />
      </main>
    );
  }
}

export default MyApp;
