import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

import './App.css';
import Header from './components/Header/Header';
import MenuTabs from './containers/MenuTabs/MenuTabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <MenuTabs />
      </div>
    );
  }
}

export default App;
