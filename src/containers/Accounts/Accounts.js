import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import uuid from 'uuid/v4';

import InnerToolbar from '../../components/InnerToolbar/InnerToolbar';
import Account from '../../components/Account/Account';
import DialogWrap from '../../components/DialogWrap/DialogWrap';
import ManipulateAccount from '../../components/Forms/ManipulateAccount/ManipulateAccount';

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
    accountList: [
      {
        id: 1,
        title: 'Cash',
        amount: 1000,
        currency: '$',
        icon: 'rich'
      },
      {
        id: 2,
        title: 'Cash2',
        amount: 1000000,
        currency: '€',
        icon: 'wallet'
      }
    ],
    dialogOpen: false,
    editingAccountData: null
  };

  handleCreateAccDialogOpen = () => {
    this.setState({ dialogOpen: true, editingAccountData: null });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleNewAccount = submitted => {
    const dataWithId = {
      ...submitted.data,
      id: uuid()
    };
    this.setState({
      ...this.state,
      accountList: [...this.state.accountList, dataWithId],
      dialogOpen: false
    });
  };

  handleDeleteAccount = id => () => {
    this.setState({
      ...this.state,
      accountList: this.state.accountList.filter(acc => acc.id !== id)
    });
  };

  handleEditAccount = id => () => {
    const data = this.state.accountList.filter(acc => acc.id === id);
    const index = this.state.accountList.findIndex(acc => acc.id === id);
    this.setState({
      dialogOpen: true,
      editingAccountData: { data: data[0], index }
    });
  };

  handleEditSubmit = submitted => {
    const accountList = [...this.state.accountList];
    accountList[submitted.index] = submitted.data;
    this.setState({
      dialogOpen: false,
      accountList
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
              onClick={this.handleCreateAccDialogOpen}
            >
              Create account
            </Button>
          </InnerToolbar>
          <div className={classes.accountsWrap}>
            {this.state.accountList.map(acc => (
              <Account
                key={acc.id}
                id={acc.id}
                title={acc.title}
                amount={acc.amount}
                currency={acc.currency}
                icon={acc.icon}
                onDelete={this.handleDeleteAccount(acc.id)}
                onEdit={this.handleEditAccount(acc.id)}
              />
            ))}
          </div>
        </Paper>
        <DialogWrap
          show={this.state.dialogOpen}
          closeModal={this.handleDialogClose}
          modalTitle={this.state.editingAccountData ? 'Edit account' : 'Creating account'}
        >
          <ManipulateAccount
            addData={this.state.editingAccountData ? this.handleEditSubmit : this.handleNewAccount}
            editData={this.state.editingAccountData}
          />
        </DialogWrap>
      </React.Fragment>
    );
  }
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accounts);
