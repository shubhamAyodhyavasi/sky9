
import React, {useEffect} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import Login from './pages/Login'
import '../../App.scss';

function AdminRouter() {
 
  return (
    <div className="App">
        
      <Switch>
          <Route
            path="/"
            component={_props => <Login />}
          />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = {
  
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminRouter)
);
