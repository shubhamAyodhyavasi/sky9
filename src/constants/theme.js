import {createMuiTheme} from '@material-ui/core';
import colors from './colors'

const baseTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: '#250b64',
          dark: '#011123',
          contrastText: '#fff',
        },
        // secondary: {
        //   main: '#64B42D',
        //   dark: '#008732',
        //   contrastText: '#fff',
        // },
        // error: {
        //   main: '#BD0043',
        //   contrastText: '#fff',
        // },
        // divider: '#D7D6D5',
        background: {
        //   paper: '#fff',
          default: colors.dark
        },
    },
    
    typography: {
        // Use the system font over Roboto.
        fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
        htmlFontSize: 16,
    },
}
  
export default createMuiTheme(baseTheme);