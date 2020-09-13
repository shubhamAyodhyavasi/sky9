import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header'
import layoutStyle from './layout.style'

const useStyles = makeStyles(layoutStyle);

export default function Layout({children}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.content}>
        <div className={classes.drawerHeader} />
        <div className="p-3"></div>
        {children}
      </div>
    </div>
  );
}
