import Helmet from 'react-helmet';
import React from 'react';
import { withRouter } from 'react-router-dom';

const getTitleFromPath = (routes, pathname) =>
  routes.find(({ path }) => path === pathname).title;

const Title = ({ routes, location: { pathname = '/' } }) => (
  <Helmet title={getTitleFromPath(routes, pathname)} />
);

export default withRouter(Title);
