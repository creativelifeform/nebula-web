import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { DOWNLOAD_PATH } from '../../../../common/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from '../../../../common/components';
import { withContent } from '../../../../common/utils';
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
      router,
      content: { callout },
    } = this.props;
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
              <button
                onClick={() => router.push(DOWNLOAD_PATH)}
                className="small"
              >
                {callout.small}
              </button>
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
  content: object.isRequired,
};

export default withRouter(withContent(Nav));
