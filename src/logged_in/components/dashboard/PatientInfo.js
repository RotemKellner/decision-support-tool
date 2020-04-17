import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, Typography, withStyles} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

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
    this.state = {
      gender: this.props.patient.information.gender
    };
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  onAgeChange(event) {
    let age = Number(event.target.value);
    this.props.onPatientAgeChange(age);
  }

  onGenderChange(event) {
    this.props.onPatientGenderChange(event.target.value);
    this.setState({gender: event.target.value});
  }

  render() {
  const { classes } = this.props;
  const Icon = this.props.icon;

  return <Grid container spacing={2} alignItems={'center'}>
    <Grid item md={3}>
      <ListItem>
        <Icon style={{ color: this.props.color }}/>
        <Box m={1}/>
        <Typography
          variant={'body2'}
          display={'inline'}
          color="primary">
          Patient
        </Typography>
      </ListItem>
    </Grid>
    <Grid item md={9}>
      <ListItem disableGutters>
        <TextField type={'number'} className={classes.idInput}
          label={'ID'}
          value={this.props.patient.id}
          variant="outlined"
          onChange={this.props.onIDChange}
          color="secondary"/>
        <TextField type={'number'} className={classes.ageInput}
                   label={'Age'}
                   variant="outlined"
                   value={Boolean(this.props.patient.information.age) && this.props.patient.information.age}
                   onChange={this.onAgeChange}
                   color="secondary"/>
        <RadioGroup aria-label="gender" value={this.state.gender} onChange={this.onGenderChange.bind(this)}>
          <FormControlLabel value="female" control={<Radio color={'secondary'}/>} label="Female"/>
          <FormControlLabel value="male" control={<Radio color={'secondary'}/>} label="Male"/>
        </RadioGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.patient.otherConsiderations.pregnent_healthy}
              onChange={() => {}}
              name="checkedB"
              color="secondary"
            />}
          label="Pregnant"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={() => {}}
              name="checkedB"
              color="secondary"
            />}
          label="COVID-19 Positive"
        />
      </ListItem>
    </Grid>
  </Grid>
  };
}

PatientInfo.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  patient: PropTypes.object.isRequired,
  onPatientAgeChange: PropTypes.func.isRequired,
  onPatientGenderChange: PropTypes.func.isRequired,
  onIDChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(PatientInfo);
