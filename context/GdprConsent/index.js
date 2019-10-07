import React, { Component, createContext } from 'react';

const LOCAL_STORAGE_KEY = 'GDPR_CONSENT';

/**
 * We default to assuming consent on the server so that we hide first then show
 * on the client if required.
 *
 */
const initialState = {
  hasGdprConsent:
    typeof window !== 'undefined'
      ? localStorage.getItem(LOCAL_STORAGE_KEY) || false
      : false,
};

const { Provider, Consumer: GdprConsentConsumer } = createContext(initialState);

class GdprConsentProvider extends Component {
  // state = { ...initialState };
  state = { hasGdprConsent: false };

  handleAccept = () => {
    const hasGdprConsent = true;

    this.setState({ hasGdprConsent }, () =>
      localStorage.setItem(LOCAL_STORAGE_KEY, hasGdprConsent)
    );
  };

  handleDeny = () => {
    const hasGdprConsent = false;

    this.setState({ hasGdprConsent }, () =>
      localStorage.setItem(LOCAL_STORAGE_KEY, hasGdprConsent)
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

export default GdprConsentProvider;

export { GdprConsentConsumer };
