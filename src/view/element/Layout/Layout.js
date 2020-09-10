import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
function Layout({ children }) {
    const classes = useStyles();
    const [menuDrawer, setMenuDrawer] = React.useState(false);
     return (
        <div className={classes.root}>
            <Menu menuDrawer={menuDrawer} setMenuDrawer={setMenuDrawer} />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={()=>{setMenuDrawer(true)}} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                                    Logo
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>
            {children}
        </div>



    );
}
export default Layout
