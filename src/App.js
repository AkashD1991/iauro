import React from 'react';
import './App.css';

import Register from './components/Register';
import { createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import {ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background:{
      default: '#f4f5fd'
    },
    shape: {
      borderRadius: '12px'
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props: {
      MuiIconButton: {
        disableRipple: true
      }
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
          <Register />
      </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
