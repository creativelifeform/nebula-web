import { array, arrayOf, shape, string } from 'prop-types';

import NextLink from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const formatLinkText = text => {
  if (text.includes('-')) {
    return text.split('-').join(' ');
  }

  return text;
};

const isActiveLink = (name, pathname) => pathname.includes(name);

const SidebarItems = ({ items, pathname, basePath }) => {
  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.title}>
          <NextLink href={`/${basePath}/${item.title}`}>
            <a
              className={isActiveLink(item.link, pathname) ? 'active' : ''}
              href={`/${basePath}/${item.link}`}
            >
              {formatLinkText(item.title)}
            </a>
          </NextLink>
          <SidebarItems
            items={item.items}
            pathname={pathname}
            basePath={`${basePath}/${item.link}`}
          />
        </li>
      ))}
    </ul>
  );
};

export const Sidebar = ({ content, basePath }) => {
  const { pathname } = useRouter();
  const { title, items } = content;

  return (
    <aside className="Sidebar">
      <header>{title}</header>
      <SidebarItems items={items} basePath={basePath} pathname={pathname} />
    </aside>
  );
};

Sidebar.propTypes = {
  content: shape({
    title: string,
    items: array,
  }),
  basePath: string,
};

SidebarItems.propTypes = {
  items: arrayOf(
    shape({
      title: string,
      items: array,
    })
  ),
  basePath: string,
  pathname: string,
};
