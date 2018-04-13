import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

import './App.css';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
