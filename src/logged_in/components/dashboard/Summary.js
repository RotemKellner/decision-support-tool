import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import {RobotIcon, HotelIcon} from '../../../icons/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import Chip from '@material-ui/core/Chip';
import MultiColorProgressBar from './MultiColorProgressBar';
import Dashboard from './Dashboard';
import html2canvas from 'html2canvas';
import BigBlue from '../ui_components/BigBlue';
import theme from '../../../theme';

const styles = theme => ({
  section1: {
    flex: 1
  },
  section2: {
    flex: 3
  },
  section3: {
    position: 'sticky',
    bottom: 0
  },
  chips: {
    paddingTop: theme.spacing(2)
  },
  divider: {
    height: 1
  }
});

function getProgressData(props) {
  const MAX_VALUE = 20;
  let makeNice = a => a.toFixed(1).replace(/[.,]00$/, "");
  let toPrecent = (item) => makeNice(((item / MAX_VALUE) * 100));

  let results = [];
  for (let key in props.riskScores) {
    let color = Dashboard.SCORE_CATEGORIES.find(config => config.text === key).color;
    results.push({name: key, value: makeNice(props.riskScores[key]), percent: toPrecent(props.riskScores[key]), color});
  }
  let emptyPercentage = 100 - results.map(r => Number(r.percent)).reduce((a,b) => a + b, 0);
  if (emptyPercentage) {
    results.push({name: '', value: makeNice(emptyPercentage), percent: emptyPercentage, color: '#fff'});
  }
  return results;
}

function Summary(props) {
  function screenshot() {
    html2canvas(document.querySelector('.MuiGrid-root')).then(canvas => {
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      a.download = `${props.patient.id}_decision_tool.png`;
      a.click();
    })
  }
  const { classes } = props;

  return (
    <Grid container direction={'column'} style={{height: '100%'}}>
      <Box mt={3} flex={1} className={classes.section1}>
        <MultiColorProgressBar readings={getProgressData(props)}/>
      </Box>
      <Grid container direction={'column'} alignContent={'center'} className={classes.section2}>
        <Grid item container={true} justify={'center'}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Box color={props.recommendation.risk_score ? theme.palette.secondary.main : theme.palette.common.lightGrey}>
              Recommendation
            </Box>


            {(() => {
              switch (props.recommendation.risk_score && props.recommendation.recommendation) {
                case 'home':
                  return <BigBlue icon={HomeIcon} label={'Home'}/>;
                case 'hotel':
                  return <BigBlue icon={HotelIcon} label={'Hotel'}/>;
                case 'hospital':
                  return <BigBlue icon={LocalHospitalIcon} label={'Hospital'}/>;
                default:
                  return <BigBlue disable={true}/>
              }
            })()}
          </Grid>
        </Grid>
        <Box mt={10}>
          <Grid container direction={'column'} alignContent={'center'}>
            <Grid item container={true} justify={'center'}>
              <Box mr={1}><RobotIcon></RobotIcon></Box>
              <Typography variant="h6">What is your decision?</Typography>
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
        </Box>
      </Grid>
      <Box className={classes.section3}>
        <Divider light classes={{root: classes.divider}}/>
        <Grid container justify={'space-evenly'}>
          <Button startIcon={<SaveAltIcon fontSize="small" />} color="secondary" onClick={screenshot}>Save</Button>
          <Button startIcon={<CloseIcon fontSize="small" />} color="secondary" onClick={props.onClearAll}>Clear all</Button>
        </Grid>
      </Box>
    </Grid>
  );
}

Summary.propTypes = {
  patient: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  riskScores: PropTypes.object.isRequired,
  recommendation: PropTypes.object.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Summary);
