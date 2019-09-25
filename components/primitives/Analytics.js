import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext({
  event: () => {},
  exception: () => {},
  init: () => {},
  pageview: () => {},
});

export default class AnalyticsProvider extends Component {
  render() {
    const { api, children } = this.props;

    return <Provider value={api}>{children}</Provider>;
  }
}

export const Analytics = Consumer;
