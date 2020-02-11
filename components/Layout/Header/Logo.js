import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/nebula-logo-web.svg';

export default () => (
  <div className="Logo">
    <Link href="/">
      <a href="/">
        <span className="logo-mark">
          <img src={logo} alt="Nebula" />
        </span>
        <span className="logo-text">nebula</span>
      </a>
    </Link>
  </div>
);
