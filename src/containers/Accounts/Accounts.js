import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import InnerToolbar from '../../components/InnerToolbar/InnerToolbar';
import Account from '../../components/Account/Account';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 16
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Accounts(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={4}>
        <InnerToolbar title="Accounts">
          <Button variant="raised" color="primary" className={classes.button}>
            Create account
          </Button>
        </InnerToolbar>
        <Account />
      </Paper>
    </React.Fragment>
  );
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accounts);
