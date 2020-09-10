import React from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
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
      <Button className={classes.root} >
        Hello World {process.env.REACT_APP_ROOT_DIR
        }
      </Button>
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
