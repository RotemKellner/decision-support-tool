import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, Typography, withStyles} from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const color = '#F08627';
const vitals = [{name: 'Temperature', unit: 'Celsius'},
  {name: 'Pulse', unit: 'Per minute'},
  {name: 'Respiratory Rate', unit: 'Per minute'},
  {name: 'O2 Saturation', unit: 'ABG'}];

const styles = theme => ({
  input: {
    marginRight: theme.spacing(2)
  }
});

class Vitals extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
  const { classes } = this.props;

  return <Grid container spacing={2} alignItems={'center'}>
    <Grid item md={3}>
      <ListItem>
        <ShowChartIcon style={{ color }}/>
        <Box m={1}/>
        <Typography
          variant={'body2'}
          display={'inline'}
          color="primary">
          Vitals
        </Typography>
      </ListItem>
    </Grid>
    <Grid item md={9}>
      <ListItem disableGutters>
        {vitals.map(vital =>
          <TextField
            key={vital.name}
            type={'number'}
            className={classes.input}
            label={vital.name}
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
  data: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Vitals);
