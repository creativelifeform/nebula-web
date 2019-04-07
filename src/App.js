import { Header, Hero } from './ui/components';
import React, { Component } from 'react';

import style from './ui/style';

style();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
