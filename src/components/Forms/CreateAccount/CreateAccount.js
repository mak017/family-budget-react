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
    id: '',
    title: '',
    amount: '',
    currency: '',
    icon: ''
  };

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleIconChoose = id => () => {
    this.setState({ icon: id });
  };

  handleSubmit = event => {
    this.setState({ id: String(Date.now()) + Math.floor(Math.random() * 10000) });
    this.props.addData(this.state);
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl className={`${classes.formControl} ${classes.formControlFullWidth}`}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="title"
            label="Account name"
            type="text"
            value={this.state.title}
            required
            onChange={this.handleValueChange}
            fullWidth
          />
        </FormControl>
        <ChooseIcon chosenIcon={this.state.icon} chooseIcon={this.handleIconChoose} />
        <FormControl className={classes.formControl}>
          <TextField
            margin="dense"
            id="name"
            name="amount"
            label="Amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleValueChange}
            fullWidth
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="currency">Currency</InputLabel>
          <Select
            value={this.state.currency}
            onChange={this.handleValueChange}
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
      </form>
    );
  }
}

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateAccount);
