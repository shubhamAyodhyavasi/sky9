import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import {MuiThemeProvider, CssBaseline} from '@material-ui/core'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./services/redux/config/configureStore";

import theme from './constants/theme';

const persistantStore = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={persistantStore.store}>
      <PersistGate loading={null} persistor={persistantStore.persistor}>
          <BrowserRouter basename={process.env.REACT_APP_ROOT_DIR} >
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </MuiThemeProvider>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
