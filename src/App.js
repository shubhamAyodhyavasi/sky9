import React, {useEffect} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import Home from './view/pages/Home'
import Album from './view/pages/Album'
import VideoDetails from './view/pages/VideoDetails'
import CategoryVideo from './view/pages/CategoryVideo'
import Login from './view/pages/Login'
import Reg from './view/pages/Reg'
import SavedVideo from './view/pages/SavedVideo'
import Search from './view/pages/Search'
import Profile from './view/pages/Profile'
import Membership from './view/pages/Membership'
import './App.scss';
import { setMenus } from './services/redux/actions';
import {getDaynamicPostData} from './services'
import { config } from './constants';
function App({setMenus}) {
  useEffect(() => {
    getDaynamicPostData('getCategory', { cat_id: config.CATEGORY_ID_LIST.home })
    .then(res => {
      if(res.records){
        setMenus(res.records)
      }
    })
  }, [setMenus])
  return (
    <div className="App">
      <Switch>
          <Route
            path="/"
            exact
            component={_props => <Home />}
          />
          <Route 
            path="/category/:id"
            exact
            component={props => <Home {...props} />}
          />
          <Route
            path="/album/:id"
            component={_props => <Album {..._props} />}
          />
           <Route
            path="/list"
            component={_props => <CategoryVideo/>}
          />
          <Route
            path="/video/:id"
            component={_props => <VideoDetails {..._props} />}
          />
           <Route
            path="/login"
            component={_props => <Login {..._props} />}
          />
          <Route
            path="/register"
            component={_props => <Reg {..._props} />}
          />
          <Route
            path="/saved-video"
            component={_props => <SavedVideo {..._props} />}
          />
          <Route
            path="/search"
            component={_props => <Search {..._props} />}
          />
          <Route
            path="/profile"
            component={_props => <Profile {..._props} />}
          />
          <Route
            path="/membership"
            component={_props => <Membership {..._props} />}
          />
          
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = {
  setMenus
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
