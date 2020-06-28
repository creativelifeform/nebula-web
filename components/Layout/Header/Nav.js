import { Callout, NavLink } from '../../primitives';
import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'next/router';

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

  handleMobileMenuToggle = () => {
    const { mobileMenuIsActive } = this.state;

    this.setState({ mobileMenuIsActive: !mobileMenuIsActive });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.router.pathname !== this.props.router.pathname) {
      this.setState({ mobileMenuIsActive: false });
    }
  }

  render() {
    const { routes } = this.props;
    const { mobileMenuIsActive } = this.state;
    const activeClass = mobileMenuIsActive ? 'active' : '';

    return (
      <nav className="Nav">
        <Hamburger
          isOpen={mobileMenuIsActive}
          toggle={this.handleMobileMenuToggle}
        />
        <div className={`ul-container ${activeClass}`}>
          <ul className={`${activeClass}`}>
            {routes.map(({ path, name, shouldHideFromNav }, i) =>
              shouldHideFromNav ? null : (
                <li key={i}>
                  <NavLink href={path} name={name} />
                </li>
              )
            )}
            <li className="has-button">
              <Callout className="small" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  routes: array.isRequired,
  router: object.isRequired,
};

export default withRouter(Nav);
