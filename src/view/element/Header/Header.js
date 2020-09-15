import React from 'react';
import clsx from 'clsx';
import {
  makeStyles, Link, Button, Drawer, Toolbar, AppBar,
  List, ListItem, ListItemText, Divider,IconButton
} from '@material-ui/core';
import { Menu ,AccountCircle} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import config from '../../../constants/config';
import logo from '../../../assets/images/sky-logo.png'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: `linear-gradient(0deg, #011123, #250b64)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
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
    backgroundColor:'#1d001d'
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
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  desktopNav: {

  },
  mobileNav: {

  }
}));



function Header({ menus }) {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerProfileOpen = () => {
    setOpenProfile(true);
  };
  const handleDrawerProfileClose = () => {
    setOpenProfile(false);
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
            <Link onClick={() => {
              history.push("/")
            }} color="inherit" className="logo-link" >
              <img width="90px" src={logo} alt={config.appName} />
            </Link>
            <div className="navigation-menu">
              <ul>
                {
                  menus.map((itm, index) =>
                    <li className="navigation-menu__item" key={index} >
                      <Button onClick={() => {
                        itm.cat_id && history.push(`/category/${itm.cat_id}`)
                      }} className="navigation-menu__link" >{itm?.title}</Button>
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
                onClick={() => {
                  history.push(`/search/`)
                }}
                style={{marginRight:10}}
                color="inherit"
              >
              <SearchIcon />
              </IconButton>
            
              {
                isLogin ? <>
                  <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                 onClick={handleDrawerProfileOpen}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
                 
                </> :
                  <Button onClick={() => { history.push(`/login`) }} className="navigation-menu__link" >Login</Button>
              }
            </div>
            <div className="mobile-nav">
              <Button onClick={handleDrawerOpen}><Menu /></Button>
              <Drawer classes={{
                paper: classes.drawerPaper,
              }}
                anchor={"right"} open={open} onClose={handleDrawerClose}>
                <List style={{
                  width: "100%"
                }} >
                  {menus.map(({ title, cat_id }) => (
                    <ListItem key={title} button onClick={() => {
                      cat_id && history.push(`/category/${cat_id}`)
                    }} >
                      {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                  <Divider />
                  {
                    isLogin ? <> 
                      <ListItem button onClick={() => {
                        history.push(`/`)
                      }} >
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={"Logout"} />
                      </ListItem>
                    </> :
                    <ListItem button onClick={() => {
                      history.push(`/login`)
                    }} >
                      {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                      <ListItemText primary={"Login"} />
                    </ListItem>
                  }
                </List>
              </Drawer>
              <Drawer classes={{
                paper: classes.drawerPaper,
              }}
                anchor={"right"} open={openProfile} onClose={handleDrawerProfileClose}>
                <List style={{
                  width: "100%"
                }} >
                  <ListItem button onClick={() => {
                      history.push(`/`)
                    }} >
                     
                      <ListItemText primary={"Profile"} />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => {
                      history.push(`/`)
                    }} >
                     
                      <ListItemText primary={"Membership"} />
                    </ListItem>
                    <Divider />
                   <ListItem button onClick={() => {
                      history.push(`/saved-video`)
                    }} >
                     
                      <ListItemText primary={"Saved Video List"} />
                    </ListItem>
                    <Divider />
                  {
                    isLogin ? <> 
                      <ListItem button onClick={() => { localStorage.removeItem("userDetails"); history.push(`/`) }} >
                        <ListItemText primary={"Logout"} />
                      </ListItem>
                    </> :
                    <ListItem button onClick={() => {
                      history.push(`/login`)
                    }} >
                     <ListItemText primary={"Login"} />
                    </ListItem>
                  }
                </List>
              </Drawer>
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