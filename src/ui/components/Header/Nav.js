import { NavLink, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { DOWNLOAD_PATH } from '../../../routes/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withContent } from '../utils';

const Hamburger = ({ isOpen, toggle }) => (
  <div className="Hamburger">
    <FontAwesomeIcon
      icon={isOpen ? faTimes : faBars}
      className={isOpen ? 'fa-times' : 'fa-bars'}
      onClick={toggle}
    />
  </div>
);

class Nav extends Component {
  state = {
    mobileMenuIsActive: false,
  };

  handleMobileMenuToggle = e => {
    const { mobileMenuIsActive } = this.state;

    this.setState({ mobileMenuIsActive: !mobileMenuIsActive });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({ mobileMenuIsActive: false });
    }
  }

  render() {
    const {
      routes,
      history,
      content: { callout },
    } = this.props;
    const { mobileMenuIsActive } = this.state;

    return (
      <nav className="Nav">
        <Hamburger
          isOpen={mobileMenuIsActive}
          toggle={this.handleMobileMenuToggle}
        />
        <ul className={`${mobileMenuIsActive ? 'active' : ''}`}>
          {routes.map(({ path, name, shouldHideFromNav }, i) =>
            shouldHideFromNav ? null : (
              <li key={i}>
                <NavLink exact to={path}>
                  {name}
                </NavLink>
              </li>
            )
          )}
          <li className="has-button">
            <button
              onClick={() => history.push(DOWNLOAD_PATH)}
              className="small"
            >
              {callout.small}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  routes: array.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  content: object.isRequired,
};

export default withRouter(withContent(Nav));
