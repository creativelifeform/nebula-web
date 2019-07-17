import { NavLink, withRouter } from 'react-router-dom';

import { DOWNLOAD_PATH } from '../../../routes/constants';
import React from 'react';
import { withContent } from '../utils';

const Nav = ({ routes, history, content: { callout } }) => (
  <nav className="Nav">
    <ul>
      {routes.map(({ path, name, shouldHideFromNav }, i) =>
        shouldHideFromNav ? null : (
          <li key={i}>
            <NavLink exact to={path}>
              {name}
            </NavLink>
          </li>
        )
      )}
      <li>
        <button onClick={() => history.push(DOWNLOAD_PATH)} className="small">
          {callout.small}
        </button>
      </li>
    </ul>
  </nav>
);

export default withRouter(withContent(Nav));
