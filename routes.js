import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import SearchContainer from './containers/SearchContainer';
import ForecastContainer from './containers/ForecastContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchContainer}>hey</IndexRoute>
      <Route path="forecast" component={ForecastContainer} />
    </Route>
  </Router>
);
