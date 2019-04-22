import { Footer, Header } from './ui/components';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Helmet from 'react-helmet';
import routes from './routes';
import style from './ui/style';

style();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet title="You Are Doing Great" />
          <Header routes={routes} />
          <Switch>
            {routes.map(route => (
              <Route key={route.title} {...route} />
            ))}
            <Route component={() => <div>404 File Not Found</div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
