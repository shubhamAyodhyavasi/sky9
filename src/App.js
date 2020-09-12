import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import Home from './view/pages/Home'
import Album from './view/pages/Album'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route
            path="/"
            exact
            component={_props => <Home/>}
          />
          <Route
            path="/album"
            component={_props => <Album/>}
          />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
export default withRouter(
  connect(
    mapStateToProps,
  )(App)
);
