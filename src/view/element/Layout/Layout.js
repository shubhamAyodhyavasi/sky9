import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header, Footer} from '../'
import layoutStyle from './layout.style'
const useStyles = makeStyles(layoutStyle);

export default function Layout({children}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <div className={classes.drawerHeader} />
        <div className="p-3"></div>
        <div className="main-containr">
        {children}
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}
