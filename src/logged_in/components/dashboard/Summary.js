import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ComputerIcon from '@material-ui/icons/Computer';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import Chip from '@material-ui/core/Chip';
import MultiColorProgressBar from './MultiColorProgressBar';
import Dashboard from './Dashboard';

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
  chips: {
    paddingTop: theme.spacing(1)
  }
});

function getProgressData(riskScores) {
  const MAX_VALUE = 20;
  let makeNice = a => a.toFixed(1).replace(/[.,]00$/, "");
  let toPrecent = (item) => makeNice(((item / MAX_VALUE) * 100));
  let allConfigs = Object.assign({}, Dashboard.STATIC_RISK_CONFIG, Dashboard.DYNAMIC_RISK_CONFIG);
  let results = [];
  for (let key in riskScores) {
    results.push({name: key, value: makeNice(riskScores[key]), percent: toPrecent(riskScores[key]), color: allConfigs[key].color});
  }
  return results;
}

function Summary(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <MultiColorProgressBar readings={getProgressData(props.riskScores)}/>
          </Grid>
          {/*<Grid item>*/}
          {/*  <OutlinedInput value={props.totalRiskScore.toPrecision(3)}></OutlinedInput>*/}
          {/*</Grid>*/}
        </Grid>
      </div>
      <Grid container direction={'column'} alignContent={'center'}>
        <Grid item className={classes.section2} container={true} justify={'center'}>
          <Typography gutterBottom>
            Recommendation
          </Typography>
          <Chip size={'medium'} variant="outlined" color="secondary" icon={<HotelIcon />} label={'Hotel'}/>
        </Grid>
        <Grid item className={classes.section3}>
          <Grid container direction={'column'} alignContent={'center'}>
            <Grid item container={true} justify={'center'}>
              <Box mr={1}><ComputerIcon></ComputerIcon></Box>
              <Typography variant="h6">What is your decision??</Typography>
            </Grid>
            <Grid item container={true} justify={'center'}>
              <Typography variant={'body2'}>Human input will improve the algorithm</Typography>
            </Grid>
            <Grid item container={true} justify={'space-evenly'} className={classes.chips}>
              <Chip variant="outlined" color="secondary" icon={<HomeIcon />} label={'Home'}/>
              <Chip variant="outlined" color="secondary" icon={<HotelIcon />} label={'Hotel'}/>
              <Chip variant="outlined" color="secondary" icon={<LocalHospitalIcon />} label={'Hospital'}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider/>
      <Grid container justify={'space-around'}>
        <Grid item>
          <Button startIcon={<SaveAltIcon fontSize="small" />} color="secondary">Save</Button>
        </Grid>
        <Grid item>
          <Button startIcon={<CloseIcon fontSize="small" />} color="secondary" onClick={props.onClearAll}>Clear all</Button>
        </Grid>
      </Grid>
    </div>
  );
}

Summary.propTypes = {
  theme: PropTypes.object.isRequired,
  riskScores: PropTypes.object.isRequired,
  totalRiskScore: PropTypes.number.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Summary);
