import Helmet from 'react-helmet';
import React from 'react';
import { withRouter } from 'react-router-dom';

const getTitleFromPath = (routes, pathname) => {
  const { title = '404' } = routes.find(({ path }) => path === pathname) || {};

  return title;
};

const Title = ({ routes, location: { pathname = '/' } }) => (
  <Helmet title={getTitleFromPath(routes, pathname)} />
);

export default withRouter(Title);
