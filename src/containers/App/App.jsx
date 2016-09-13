import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'reducers/configureStore';
import * as Actions from 'actions/Actions';
import { match, Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';

import Layout from 'containers/Layout';
import Help from 'containers/routes/Help';
import Hello from 'containers/routes/Hello';
import BooksIndex from 'containers/routes/BooksIndex';
import BookNew from 'containers/routes/BookNew';

import StoreLoader from 'loaders/StoreLoader';

import ApplicationStyles from './App.sass';
import ResetStyles from './Reset.css';

const store = configureStore();

let routes = <Route path='/' component={Layout}>
  <IndexRoute component={BooksIndex} />
  <Route path='help' component={Help}>
    <Route path=":id" component={Help} />
  </Route>
  <Route path='book/new' component={BookNew} />
</Route>;

/**
 * App React Component
 */
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          history={browserHistory}
          render={(props) => (
            <StoreLoader {...props} store={store} />
          )}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
