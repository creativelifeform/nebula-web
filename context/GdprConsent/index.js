import React, { Component, createContext } from 'react';
import { bool, node } from 'prop-types';

import { COOKIE_KEY_GDPR_CONSENT } from '../../common/constants';
import Cookies from 'js-cookie';

const { Provider, Consumer: GdprConsentConsumer } = createContext();

class GdprConsentProvider extends Component {
  state = {
    hasGdprConsent: this.props.hasGdprConsent,
  };

  /**
   * Manages the client side check for the COOKIE_KEY_GDPR_CONSENT cookie
   *
   */
  componentDidMount() {
    const cookies = Cookies.get();
    const { hasGdprConsent } = this.state;

    if (!cookies[COOKIE_KEY_GDPR_CONSENT]) {
      return this.setState({ hasGdprConsent: false });
    }

    const hasGdprConsentCookieValue = JSON.parse(
      cookies[COOKIE_KEY_GDPR_CONSENT]
    );

    if (hasGdprConsent !== hasGdprConsentCookieValue) {
      return this.setState({
        hasGdprConsent: hasGdprConsentCookieValue,
      });
    }
  }

  handleAccept = () => {
    const hasGdprConsent = true;

    this.setState({ hasGdprConsent }, () =>
      Cookies.set(COOKIE_KEY_GDPR_CONSENT, hasGdprConsent)
    );
  };

  handleDeny = () => {
    const hasGdprConsent = false;

    this.setState({ hasGdprConsent }, () =>
      Cookies.setItem(COOKIE_KEY_GDPR_CONSENT, hasGdprConsent)
    );
  };

  render() {
    const {
      state,
      handleAccept,
      handleDeny,
      props: { children },
    } = this;

    return (
      <Provider value={{ ...state, ...{ handleAccept, handleDeny } }}>
        {children}
      </Provider>
    );
  }
}

GdprConsentProvider.propTypes = {
  children: node.isRequired,
  hasGdprConsent: bool.isRequired,
};

export default GdprConsentProvider;

export { GdprConsentConsumer };
