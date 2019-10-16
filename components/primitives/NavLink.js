import { shape, string } from 'prop-types';

import NextLink from 'next/link';
import React from 'react';
import { withRouter } from 'next/router';

const Link = ({ href, name, router: { pathname } }) => (
  <NextLink href={href}>
    <a className={href === pathname ? 'active' : ''} href={href}>
      {name}
    </a>
  </NextLink>
);

Link.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
  router: shape({
    pathname: string,
  }),
};

export const NavLink = withRouter(Link);
