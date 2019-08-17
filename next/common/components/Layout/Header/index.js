import Logo from './Logo';
import Nav from './Nav';
import React from 'react';

export default ({ routes }) => (
  <header className="Header">
    <Logo />
    <Nav routes={routes} />
  </header>
);
