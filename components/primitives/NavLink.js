import { shape, string } from 'prop-types';

import { Analytics } from './Analytics';
import NextLink from 'next/link';
import React from 'react';
import { withRouter } from 'next/router';

const Link = ({ href, name, router: { pathname } }) => (
  <Analytics>
    {track => (
      <NextLink href={href}>
        <a
          className={href === pathname ? 'active' : ''}
          href={href}
          onClick={() => track.pageview(href).send()}
        >
          {name}
        </a>
      </NextLink>
    )}
  </Analytics>
);

Link.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
  router: shape({
    pathname: string,
  }),
};

export const NavLink = withRouter(Link);
