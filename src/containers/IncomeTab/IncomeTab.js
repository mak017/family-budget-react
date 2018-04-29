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
  IncomeTabWrap: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit
  }
});

class IncomeTab extends Component {
  state = {
    // accountList: [
    //   {
    //     id: 1,
    //     title: 'Cash',
    //     amount: 1000,
    //     currency: '$',
    //     icon: 'rich'
    //   },
    //   {
    //     id: 2,
    //     title: 'Cash2',
    //     amount: 1000000,
    //     currency: '€',
    //     icon: 'wallet'
    //   }
    // ],
    // dialogOpen: false,
    // editingAccountData: null
  };

  handleAddIncome = () => {};

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={4}>
          <InnerToolbar title="Income">
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
              onClick={this.handleAddIncome}
            >
              Add Income
            </Button>
          </InnerToolbar>
          <div className={classes.IncomeTabWrap}>
            {/* {this.state.accountList.map(acc => (
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
            ))} */}
          </div>
        </Paper>
        {/* <DialogWrap
          show={this.state.dialogOpen}
          closeModal={this.handleDialogClose}
          modalTitle={this.state.editingAccountData ? 'Edit account' : 'Creating account'}
        >
        </DialogWrap> */}
      </React.Fragment>
    );
  }
}

IncomeTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IncomeTab);
