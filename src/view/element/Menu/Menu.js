import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Menu({menuDrawer,setMenuDrawer}) {
  const classes = useStyles();
  
  const list = (anchor='left') => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      //onClick={setMenuDrawer(false)}
      //onKeyDown={setMenuDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div>
       <React.Fragment >
           <SwipeableDrawer
            anchor='left'
            open={menuDrawer}
            onClose={setMenuDrawer( false)}
            onOpen={setMenuDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
  
    </div>
  );
}
