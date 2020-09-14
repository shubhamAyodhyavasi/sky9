import React from 'react';
import clsx from 'clsx';
import { makeStyles, Link, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import config from '../../../constants/config';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
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

function Header({menus}) {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isLogin = localStorage.getItem("userDetails");
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
            <Link onClick={()=> {
              history.push("/")
            }} color="inherit" className="logo-link" >
              <Typography variant="h6" noWrap>
                {config.appName}
              </Typography>
            </Link>
            <div className="navigation-menu">
              <ul>
                {
                  menus.map((itm, index) =>
                    <li className="navigation-menu__item" key={index} >
                      <Button onClick={()=> {
                        itm.cat_id && history.push(`/category/${itm.cat_id}`)
                      }} className="navigation-menu__link" >{itm?.title}</Button>
                    </li>
                  )
                }
              
              </ul>
            </div>
            <div className="navigation-menu-user">
              {
                isLogin ? <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>:
              <Button onClick={()=> { history.push(`/login`)}}  className="navigation-menu__link" >Login</Button>
              }
              
              
            </div>
          </div>
        </Toolbar>
      </AppBar>


    </div>
  );
}


const mapStateToProps = state => ({
  menus: state.app.menus,
});

export default connect(mapStateToProps)(Header)