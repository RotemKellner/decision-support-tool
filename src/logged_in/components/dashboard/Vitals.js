import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, Typography, withStyles} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import theme from '../../../theme';

const styles = theme => ({
  input: {
    marginRight: theme.spacing(2)
  }
});

class Vitals extends Component {

  getColor() {
    return Object.values(this.props.patient.clinicalStatus).reduce((a,b) => a+b, 0) ? this.props.color : theme.palette.common.grey;
  }

  vitalChange(event, key) {
    this.props.onClinicalStatusChange(key, Number(event.target.value));
  }

  render() {
  const { classes } = this.props;
    const Icon = this.props.icon;

  return <Grid container spacing={2} alignItems={'center'}>
    <Grid item md={2}>
      <ListItem>
        <Icon style={{ color: this.getColor() }}/>
        <Box m={1}/>
        <Typography
          variant={'body2'}
          display={'inline'}
          color="primary">
          Vitals
        </Typography>
      </ListItem>
    </Grid>
    <Grid item md={10}>
      <ListItem disableGutters>
        {this.props.items.map(vital =>
          <TextField
            value={Boolean(this.props.patient.clinicalStatus[vital.key]) && this.props.patient.clinicalStatus[vital.key]}
            onChange={(e) => this.vitalChange(e, vital.key)}
            key={vital.key}
            type={'number'}
            className={classes.input}
            label={vital.text}
            helperText={vital.unit}
            variant="outlined"
            color="secondary"/>
        )}
      </ListItem>
    </Grid>
  </Grid>
  };
}

Vitals.propTypes = {
  icon: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  patient: PropTypes.object.isRequired,
  onClinicalStatusChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Vitals);
