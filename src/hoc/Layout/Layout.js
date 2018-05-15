import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

import Header from '../../components/Header/Header';
import MenuTabs from '../../containers/MenuTabs/MenuTabs';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <MenuTabs />
      </React.Fragment>
    );
  }
}
