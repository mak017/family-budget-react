import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import InnerToolbar from '../../components/InnerToolbar/InnerToolbar';
import Account from '../../components/Account/Account';
import DialogWrap from '../../components/DialogWrap/DialogWrap';
import ManipulateAccount from '../../components/Forms/ManipulateAccount/ManipulateAccount';
import * as actions from '../../store/actions';

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
    dialogOpen: false,
    editingAccountData: null
  };

  handleCreateAccDialogOpen = () => {
    this.setState({ dialogOpen: true });
    this.props.onAddAccountInit();
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleNewAccount = submitted => {
    this.props.onAddAccountSubmit(submitted);
    this.setState({ dialogOpen: false });
  };

  handleEditAccount = id => () => {
    this.props.onEditAccountInit(id);
    this.setState({ dialogOpen: true });
  };

  handleEditSubmit = submitted => {
    this.props.onEditSubmit(submitted);
    this.setState({ dialogOpen: false });
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
            {this.props.accountList.map(acc => (
              <Account
                key={acc.id}
                id={acc.id}
                title={acc.title}
                amount={acc.amount}
                currency={acc.currency}
                icon={acc.icon}
                onDelete={this.props.onDeleteAccount(acc.id)}
                onEdit={this.handleEditAccount(acc.id)}
              />
            ))}
          </div>
        </Paper>
        <DialogWrap
          show={this.state.dialogOpen}
          closeModal={this.handleDialogClose}
          modalTitle={this.props.editingAccountData ? 'Edit account' : 'Creating account'}
        >
          <ManipulateAccount
            addData={this.props.editingAccountData ? this.handleEditSubmit : this.handleNewAccount}
            editData={this.props.editingAccountData}
          />
        </DialogWrap>
      </React.Fragment>
    );
  }
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddAccountInit: PropTypes.func.isRequired,
  onAddAccountSubmit: PropTypes.func.isRequired,
  onEditAccountInit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
  accountList: PropTypes.array.isRequired,
  editingAccountData: PropTypes.any
};

const mapStateToProps = state => {
  return {
    accountList: state.accountList,
    editingAccountData: state.editingAccountData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAccountInit: () => dispatch(actions.addAccountInit()),
    onDeleteAccount: id => () => dispatch(actions.deleteAccount(id)),
    onEditAccountInit: id => dispatch(actions.editAccountInit(id)),
    onEditSubmit: submitted => dispatch(actions.editAccountSubmit(submitted)),
    onAddAccountSubmit: submitted => dispatch(actions.addAccountSubmit(submitted))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Accounts));
