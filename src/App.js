import { Blurb, Callout, Header, Hero } from './ui/components';
import React, { Component } from 'react';

import style from './ui/style';

style();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Blurb />
        <Callout />
      </div>
    );
  }
}

export default App;
