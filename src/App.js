import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './App.css';
import Header from './components/Header/Header';
import MenuTabs from './containers/MenuTabs/MenuTabs';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a98274',
      main: '#795548',
      dark: '#4b2c20',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#000'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <MenuTabs />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
