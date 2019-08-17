import { array, node, shape, string } from 'prop-types';

import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import React from 'react';
import { withRouter } from 'next/router';

const getTitle = (pathname, routes) =>
  routes.find(({ path }) => path === pathname).title;

const Layout = ({ children, router: { pathname }, routes }) => (
  <>
    <Head>
      <title>{getTitle(pathname, routes)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="App">
      <Header routes={routes} />
      {children}
      <Footer />
    </main>
  </>
);

Layout.propTypes = {
  children: node,
  router: shape({
    pathname: string,
  }),
  routes: array,
};

export default withRouter(Layout);
