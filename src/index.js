import { hydrate, render } from 'react-dom';

import App from './App';
import React from 'react';

const rootNode = document.getElementById('root');

if (rootNode.hasChildNodes()) {
  hydrate(<App />, rootNode);
} else {
  render(<App />, rootNode);
}
