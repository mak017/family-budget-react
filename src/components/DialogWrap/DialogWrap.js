import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  dialogActions: {
    position: 'absolute',
    right: 0
  },
  button: {
    minWidth: 'auto'
  }
});

class DialogWrap extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.show}
          onClose={this.props.closeModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.modalTitle}</DialogTitle>
          <DialogActions className={classes.dialogActions}>
            <IconButton
              color="secondary"
              className={classes.button}
              aria-label="Close"
              onClick={this.props.closeModal}
            >
              <CloseIcon />
            </IconButton>
            {/* <Button onClick={this.props.closeModal} color="primary">
              Cancel
            </Button> */}
          </DialogActions>
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </div>
    );
  }
}

DialogWrap.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogWrap);
