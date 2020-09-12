import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import Home from './view/pages/Home'
import Album from './view/pages/Album'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function App() {
  const classes = useStyles();
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
