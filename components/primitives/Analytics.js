import React, { Component, createContext } from 'react';

const defaultApi = {
  event: () => {},
  exception: () => {},
  init: () => {},
  pageview: () => {},
};
const { Provider, Consumer } = createContext(defaultApi);

export default class AnalyticsProvider extends Component {
  render() {
    const { api = defaultApi, children } = this.props;

    return <Provider value={api}>{children}</Provider>;
  }
}

export const Analytics = Consumer;
