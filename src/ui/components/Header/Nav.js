import { NavLink } from 'react-router-dom';
import React from 'react';

export default ({ routes }) => (
  <nav className="Nav">
    <ul>
      {routes.map(({ path, title }, i) => (
        <li key={i}>
          <NavLink exact to={path}>
            {title}
          </NavLink>
        </li>
      ))}
      <li>
        <button className="small">Download</button>
      </li>
    </ul>
  </nav>
);
