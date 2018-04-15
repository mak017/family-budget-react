import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import BuildIcon from '@material-ui/icons/Build';
import CloseIcon from '@material-ui/icons/Close';

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
    <div>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <IconButton color="secondary" className={classes.button} aria-label="Edit">
            <BuildIcon />
          </IconButton>
          <IconButton color="secondary" className={classes.button} aria-label="Delete">
            <CloseIcon />
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
            {props.currency}
            {props.amount}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
