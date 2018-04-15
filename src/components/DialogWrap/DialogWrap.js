import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class DialogWrap extends Component {
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.show}
          onClose={this.props.closeModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.modalTitle}</DialogTitle>
          <DialogContent>{this.props.children}</DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.closeModal} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogWrap.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogWrap);
