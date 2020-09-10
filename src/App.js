import React from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
          <Route
            path="/"
            exact
            component={_props => <div >Home</div>}
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
