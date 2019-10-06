import React, { Component, createContext } from 'react';
import { UA_ID, __DEV__ } from '../../common/config';

import { node } from 'prop-types';

const defaultApi = {
  event: ({ ec, ea, el, ev, dp }) => ({
    send: () => console.table([{ ec, ea, el, ev, dp }]),
  }),
  pageview: path => ({
    send: () => console.log(`Tracking pageview ${path}`),
  }),
};
const { Provider, Consumer } = createContext(defaultApi);

/**
 * Provides the universal analytics API to consumers.
 *
 */
export default class AnalyticsProvider extends Component {
  state = {
    api: defaultApi,
  };

  /**
   * Sets the correct API to pass to consumers if we are client side.
   *
   */
  componentDidMount() {
    const ua = require('universal-analytics');
    const { uid } = this;
    const api = ua(UA_ID, { uid });

    this.setState({ api });
  }

  /**
   * Ensures a consistent user is tracked.
   *
   * @return {string|number}
   */
  get uid() {
    const uid = __DEV__
      ? 'TEST_USER'
      : localStorage.getItem('UA_USER_ID') || Date.now();

    localStorage.setItem('UA_USER_ID', uid);

    return uid;
  }

  render() {
    const { api } = this.state;
    const { children } = this.props;

    return <Provider value={api}>{children}</Provider>;
  }
}

AnalyticsProvider.propTypes = {
  children: node,
};

export const Analytics = Consumer;
