import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import currencies from '../../../assets/data/currency-list.json';
import ChooseIcon from '../ChooseIcon/ChooseIcon';

const currencyList = Object.values(currencies);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  formControlFullWidth: {
    display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class CreateAccount extends Component {
  state = {
    currency: '',
    name: 'hai'
  };

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <FormControl className={`${classes.formControl} ${classes.formControlFullWidth}`}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Account name"
            type="text"
            fullWidth
          />
        </FormControl>
        <ChooseIcon />
        <FormControl className={classes.formControl}>
          <TextField margin="dense" id="name" label="Amount" type="text" fullWidth />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="currency">Currency</InputLabel>
          <Select
            value={this.state.currency}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'currency',
              id: 'currency'
            }}
          >
            {currencyList.map(curr => {
              return (
                <MenuItem key={curr.code} value={curr.code}>
                  {curr.name} ({curr.code})
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </React.Fragment>
    );
  }
}

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateAccount);
