import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
  section1: {
    margin: theme.spacing(3),
  },
  section2: {
    margin: theme.spacing(3)
  },
  section3: {
    margin: theme.spacing(3),
  },
});

function Summary(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Score
            </Typography>
          </Grid>
          <Grid item>
            <OutlinedInput value={props.totalRiskScore.toPrecision(3)}></OutlinedInput>
          </Grid>
        </Grid>
      </div>
      <Grid container direction={'column'} alignContent={'center'}>
        <Grid item className={classes.section2} container={true} justify={'center'}>
          <Typography gutterBottom>
            Recommendation
          </Typography>
        </Grid>
        <Grid item className={classes.section3} container={true} justify={'center'}>
          <Typography gutterBottom variant="h6">
            What is your decision?
          </Typography>
        </Grid>
      </Grid>
      <Divider/>
      <Grid container justify={'space-around'}>
        <Grid item>
          <Button startIcon={<SaveAltIcon fontSize="small" />} color="secondary">Save</Button>
        </Grid>
        <Grid item>
          <Button startIcon={<CloseIcon fontSize="small" />} color="secondary">Clear all</Button>
        </Grid>
      </Grid>
    </div>
  );
}

Summary.propTypes = {
  theme: PropTypes.object.isRequired,
  riskScores: PropTypes.object.isRequired,
  totalRiskScore: PropTypes.number.isRequired
};

export default withStyles(styles, { withTheme: true })(Summary);
