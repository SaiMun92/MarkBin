import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Not really sure what the react-router supposed to do

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import BinsViewer from './components/bins/bins_viewer';
// For Bins collection and its methods
import { Bins } from '../imports/collections/bins';

// browserHistory --> not sure what is this for
// The route path="/" is to direct the user to the app component
// The IndexRoute is to display the home page when the user log in to localhost:3000

// start from App, then header

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
