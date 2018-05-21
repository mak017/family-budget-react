import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import CustomIcon from '../../CustomIcon/CustomIcon';
import icons from '../../../assets/img/icons/fill/sprite.svg';
import iconIdList from '../../../assets/data/icons-id-list.json';

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
  },
  listItemActive: {
    background: theme.palette.action.selected
  }
});

function InsetList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        {iconIdList['account-icons'].map(id => (
          <ListItem
            key={id}
            button
            className={
              props.chosenIcon !== id
                ? classes.listItem
                : `${classes.listItem} ${classes.listItemActive}`
            }
            onClick={props.chooseIcon(id)}
          >
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
  classes: PropTypes.object.isRequired,
  chosenIcon: PropTypes.string.isRequired,
  chooseIcon: PropTypes.func.isRequired
};

export default withStyles(styles)(InsetList);
