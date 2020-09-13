import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Link, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import config from '../../../constants/config';
import { getDaynamicPostData } from '../../../services/services'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));

export default function Header() {
  const [menuData, setMenuData] = useState([])
  useEffect(async () => {
    const response = await getDaynamicPostData('getCategory', { cat_id: 4 })
    setMenuData(response?.records)
  }, []);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className="navigation-wrapper">
            <Link color="inherit" className="logo-link" >
              <Typography variant="h6" noWrap>
                {config.appName}
              </Typography>
            </Link>
            <div className="navigation-menu">
              <ul>
                {
                  menuData && menuData.map((itm, index) =>
                    <li className="navigation-menu__item" >
                      <Button className="navigation-menu__link" >{itm?.title}</Button>
                    </li>
                  )
                }
              
              </ul>
            </div>
            <div className="navigation-menu-user">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>


    </div>
  );
}
