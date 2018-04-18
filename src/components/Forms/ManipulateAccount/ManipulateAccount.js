import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

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
    display: 'flex',
    alignItems: 'center'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    minWidth: 120
  }
});

class ManipulateAccount extends Component {
  state = {
    id: '',
    title: '',
    amount: '',
    currency: '',
    icon: ''
  };

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.editData) {
  //     this.setState({
  //       ...nextProps.editData
  //     });
  //   }
  // };

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleIconChoose = id => () => {
    this.setState({ icon: id });
  };

  handleSubmit = event => {
    this.props.addData(this.state);
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
                <MenuItem key={curr.code} value={curr.symbol}>
                  {curr.name} ({curr.code})
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={`${classes.formControl} ${classes.formControlFullWidth}`}>
          <Button variant="raised" color="secondary" className={classes.button} type="submit">
            Create
          </Button>
        </FormControl>
      </form>
    );
  }
}

ManipulateAccount.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManipulateAccount);
