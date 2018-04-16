import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import InnerToolbar from '../../components/InnerToolbar/InnerToolbar';
import Account from '../../components/Account/Account';
import DialogWrap from '../../components/DialogWrap/DialogWrap';
import CreateAccount from '../../components/Forms/CreateAccount/CreateAccount';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 16
  },
  accountsWrap: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Accounts extends Component {
  state = {
    accountList: {
      cash: {
        id: 1,
        title: 'Cash',
        amount: 1000,
        currency: '$',
        icon: 'rich'
      },
      cash2: {
        id: 2,
        title: 'Cash2',
        amount: 1000000,
        currency: '$',
        icon: 'wallet'
      }
    },
    dialogOpen: true
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleNewAccount = data => () => {
    this.setState({
      ...this.state.accountList,
      data
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={4}>
          <InnerToolbar title="Accounts">
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
              onClick={this.handleDialogOpen}
            >
              Create account
            </Button>
          </InnerToolbar>
          <div className={classes.accountsWrap}>
            {Object.keys(this.state.accountList).map(acc => (
              <Account
                key={this.state.accountList[acc].id}
                title={this.state.accountList[acc].title}
                amount={this.state.accountList[acc].amount}
                currency={this.state.accountList[acc].currency}
                icon={this.state.accountList[acc].icon}
              />
            ))}
          </div>
        </Paper>
        <DialogWrap
          show={this.state.dialogOpen}
          closeModal={this.handleDialogClose}
          modalTitle="Creating account"
        >
          <CreateAccount addData={this.handleNewAccount} />
        </DialogWrap>
      </React.Fragment>
    );
  }
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accounts);
