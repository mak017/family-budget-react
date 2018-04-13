import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import CustomIcon from '../CustomIcon/CustomIcon';
import icons from '../../assets/img/icons/lineal/icons.svg';
// import icons from '../../assets/img/icons/fill/icons.css';

const styles = {
  card: {
    maxWidth: 345,
    margin: 16,
    paddingTop: 10
  },
  media: {
    height: 200,
    backgroundSize: 'contain'
  }
};

function Account(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.media}>
          <CustomIcon icon="icon-rich" url={icons} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Cash
          </Typography>
          <Typography variant="body2" component="p">
            $1000
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Change
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
