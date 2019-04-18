import { About, Footer, Header, Home } from './ui/components';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Helmet from 'react-helmet';
import style from './ui/style';

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
  {
    title: 'Pricing',
    path: '/pricing',
    component: About,
  },
  {
    title: 'Guide',
    path: '/guide',
    component: About,
  },
];

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
