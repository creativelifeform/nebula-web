import { Footer, Header } from './ui/components';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes, { ScrollToTop } from './routes';

import Title from './Title';
import style from './ui/style'; // eslint-disable-line

class App extends Component {
  render() {
    return (
      <Router>
        <Title routes={routes} />
        <ScrollToTop>
          <div className="App">
            <Header routes={routes} />
            <Switch>
              {routes.map(route => (
                <Route key={route.title} {...route} />
              ))}
              <Route component={() => <div>404 File Not Found</div>} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
