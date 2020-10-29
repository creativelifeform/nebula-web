import React from 'react';

const date = new Date();

export default ({ pathname }) => (
  <footer className={`Footer ${pathname === '/' ? 'home' : ''}`}>
    © <a href="http://creativelifeform.com">Creativelifeform</a>{' '}
    {date.getFullYear()}, Nebula is powered by the open source{' '}
    <a href="https://three-nebula.org">three-nebula</a> particle engine.
  </footer>
);
