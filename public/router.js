import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import MainLayout from './components/layout';
import homePage from './components/containers/homePage';






export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={homePage} />
    </Route>
  </Router>
);
