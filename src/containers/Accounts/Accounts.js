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
  button: {
    margin: theme.spacing.unit
  }
});

class Accounts extends Component {
  state = {
    modalOpen: true
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={4}>
          <InnerToolbar title="Accounts">
            <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={this.handleModalOpen}
            >
              Create account
            </Button>
          </InnerToolbar>
          <Account title="Cash" amount={1000} currency="$" icon="rich" />
        </Paper>
        <DialogWrap
          show={this.state.modalOpen}
          closeModal={this.handleModalClose}
          modalTitle="Creating account"
        >
          <CreateAccount />
        </DialogWrap>
      </React.Fragment>
    );
  }
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accounts);
