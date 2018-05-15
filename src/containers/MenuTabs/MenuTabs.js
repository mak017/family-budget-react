import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { NavLink, withRouter } from 'react-router-dom';

import Accounts from '../Accounts/Accounts';
import Income from '../Income/Income';

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
  },
  appBar: {
    backgroundColor: theme.palette.primary.light
  }
});

class MenuTabs extends React.Component {
  // state = {
  //   value: 0
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  handleCallToRouter = value => {
    this.props.history.push(value);
  };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}
            scrollable
            scrollButtons="off"
          >
            <Tab value="/accounts" label="Accounts" component={NavLink} to="/accounts" />
            <Tab value="/income" label="Income" component={NavLink} to="/income" />
            <Tab value="/costs" label="Costs" />
          </Tabs>
        </AppBar>
        {this.props.history.location.pathname === '/accounts' && (
          <TabContainer>
            <Accounts />
          </TabContainer>
        )}
        {this.props.history.location.pathname === '/income' && (
          <TabContainer>
            <Income />
          </TabContainer>
        )}
        {this.props.history.location.pathname === '/costs' && <TabContainer>Costs</TabContainer>}
      </div>
    );
  }
}

MenuTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(MenuTabs));
