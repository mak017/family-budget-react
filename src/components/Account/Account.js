import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

import CustomIcon from '../CustomIcon/CustomIcon';
import icons from '../../assets/img/icons/fill/sprite.svg';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 16
  },
  cardActions: {
    justifyContent: 'flex-end',
    paddingTop: 0,
    paddingBottom: 0
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    display: 'inline-block',
    width: '30%'
  },
  remainder: {
    margin: 'auto'
  }
});

function Account(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <IconButton
            color="secondary"
            className={classes.button}
            onClick={props.onEdit}
            aria-label="Edit"
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.button}
            onClick={props.onDelete}
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <div className={classes.cardTitle}>
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
        </div>
        <CardContent className={classes.cardContent}>
          <div className={classes.media}>
            <CustomIcon icon={props.icon} url={icons} />
          </div>
          <Typography variant="body2" component="p" className={classes.remainder}>
            {props.currency !== '$'
              ? `${props.amount} ${props.currency}`
              : props.currency + props.amount}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
