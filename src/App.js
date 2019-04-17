import { Header, Home } from './ui/components';
import React, { Component } from 'react';

import style from './ui/style';

style();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
