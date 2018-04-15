import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import StarIcon from '@material-ui/icons/Star';

import CustomIcon from '../../CustomIcon/CustomIcon';
import icons from '../../../assets/img/icons/fill/sprite.svg';
import coin from '../../../assets/img/icons/fill/coin.svg';

const iconIdList = [
  'coin',
  'coin-1',
  'coin-2',
  'coin-3',
  'coin-4',
  'coin-5',
  'coin-6',
  'coin-7',
  'coin-8',
  'coin-9',
  'coin-10',
  'coins',
  'coins-1',
  'crate',
  'crate-1',
  'crate-2',
  'crate-3',
  'crate-4',
  'crate-5',
  'credit-card',
  'credit-card-1',
  'credit-card-2',
  'credit-card-3',
  'credit-card-4',
  'credit-card-5',
  'credit-card-6',
  'money',
  'notes',
  'notes-1',
  'notes-2',
  'piggy-bank',
  'piggy-bank-1',
  'rich',
  'safebox',
  'safebox-1',
  'safebox-2',
  'safebox-3',
  'safebox-4',
  'wallet',
  'wallet-1',
  'wallet-2',
  'yen'
];

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    display: 'flex',
    overflow: 'auto'
  },
  listItem: {
    minWidth: 90
  }
});

function InsetList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        {iconIdList.map(id => (
          <ListItem key={id} button className={classes.listItem}>
            <ListItemIcon>
              <CustomIcon icon={id} url={icons} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetList);
