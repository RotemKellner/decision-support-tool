import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, withStyles} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import isIsraeliIdValid from 'israeli-id-validator';
import theme from '../../../theme';

const styles = theme => ({
  idInput: {
    marginRight: theme.spacing(2)
  },
  ageInput: {
    marginRight: theme.spacing(2),
    width: 100
  }
});

class PatientInfo extends Component {
  constructor(props) {
    super(props);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  onAgeChange(event) {
    let age = Number(event.target.value);
    this.props.onPatientAgeChange(age);
  }

  onGenderChange(event) {
    this.props.onPatientGenderChange(event.target.value);
  }

  isIDValid() {
    return isIsraeliIdValid(this.props.patient.id);
  }

  getAgeContributionFactor() {
    return (this.props.recommendation.contributing_factors && `+${this.props.recommendation.contributing_factors.age.toPrecision(2)}`) || ' '
  }

  getColor() {
    return this.props.patient.information.age ? this.props.color : theme.palette.common.grey;
  }

  render() {
  const { classes } = this.props;
  const Icon = this.props.icon;

  return <Grid container spacing={2} alignItems={'center'}>
    <Grid item md={2}>
      <ListItem>
        <Icon style={{ color: this.getColor() }}/>
        <Box m={1} color="text.primary" fontWeight={'bold'}>Patient</Box>
      </ListItem>
    </Grid>
    <Grid item md={10}>
      <Grid container alignItems={'center'}>
          <TextField type={'number'} className={classes.idInput}
                     error={!this.isIDValid()}
                     label={'ID'}
                     value={this.props.patient.id}
                     variant="outlined"
                     onChange={this.props.onIDChange}
                     color="secondary"
                     helperText={this.isIDValid() ? ' ' : 'Enter a valid ID'}>
          </TextField>
          <TextField type={'number'} className={classes.ageInput}
                     label={'Age'}
                     variant="outlined"
                     value={Boolean(this.props.patient.information.age) && this.props.patient.information.age}
                     onChange={this.onAgeChange}
                     color="secondary"
                     helperText={this.getAgeContributionFactor()}/>
        <RadioGroup aria-label="gender" value={this.props.patient.information.gender} style={{display: 'inline'}} onChange={this.onGenderChange.bind(this)}>
          <Grid container style={{display: 'inline-flex', width: 185}}>
            <Grid item md={6}>
              <FormControlLabel value="female" control={<Radio size={'small'} color={'secondary'}/>} label="Female"/>
            </Grid>
            <Grid item md={6} >
              <FormControlLabel value="male" control={<Radio size={'small'} color={'secondary'}/>} label="Male"/>
            </Grid>
            <Grid item md={12}>
              <FormControlLabel
                style={{visibility: this.props.patient.information.gender === 'female' ? 'visible' : 'hidden'}}
                control={
                  <Checkbox
                    size={'small'}
                    checked={this.props.patient.otherConsiderations.pregnent_healthy}
                    onChange={() => {}}
                    name="checkedB"
                    color="secondary"
                  />}
                label="Pregnant"
              />
            </Grid>
          </Grid>
        </RadioGroup>
        <FormControlLabel
          control={
            <Checkbox
              size={'small'}
              checked={true}
              onChange={() => {}}
              name="checkedB"
              color="secondary"
            />}
          label="COVID-19 Positive"
        />
      </Grid>
    </Grid>
  </Grid>
  };
}

PatientInfo.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  patient: PropTypes.object.isRequired,
  recommendation: PropTypes.object.isRequired,
  onPatientAgeChange: PropTypes.func.isRequired,
  onPatientGenderChange: PropTypes.func.isRequired,
  onIDChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(PatientInfo);
