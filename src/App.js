import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Accounts from './containers/Accounts/Accounts';
import Income from './containers/Income/Income';

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
          {/* <Layout>{this.props.children}</Layout> */}
          <Layout>
            {this.props.children}
            <Switch>
              <Route path="/accounts" component={Accounts} />
              <Route path="/income" component={Income} />
              {/* <Route path="/" exact component={BurgerBuilder} /> */}
            </Switch>
          </Layout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
