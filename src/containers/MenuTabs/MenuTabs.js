import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import Accounts from '../Accounts/Accounts';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3, flexGrow: 1, display: 'flex' }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%'
  }
});

class MenuTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
            <Tab label="Accounts" />
            <Tab label="Costs" />
            <Tab label="Income" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Accounts />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Costs</TabContainer>}
        {value === 2 && <TabContainer>Income</TabContainer>}
      </div>
    );
  }
}

MenuTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuTabs);
