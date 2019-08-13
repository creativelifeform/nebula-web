import * as serviceWorker from './serviceWorker';

import { hydrate, render } from 'react-dom';

import App from './App';
import React from 'react';

const rootNode = document.getElementById('root');

if (rootNode.hasChildNodes()) {
  hydrate(<App />, rootNode);
} else {
  render(<App />, rootNode);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
