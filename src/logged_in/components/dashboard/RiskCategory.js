import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, Typography, withStyles} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import theme from '../../../theme';

const styles = theme => ({
  chip: {
    marginRight: theme.spacing(1)
  }
});

class RiskCategory extends Component {
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
            {this.props.categoryName}
          </Typography>
        </ListItem>
      </Grid>
      <Grid item md={9}>
        <ListItem disableGutters>
          {this.props.items && Object.keys(this.props.items).map((detail, id) => {
            let color = this.props.items[detail].selected ? this.props.color : theme.palette.grey[600];
            return <Chip key={id}
                         className={classes.chip}
                         style={{backgroundColor: fade(color, 0.2), color: color}}
                         label={this.props.items[detail].key}
                         onClick={this.props.onSelectionChange.bind(null, this.props.categoryName, this.props.items[detail].key)}/>;
          })}
        </ListItem>
      </Grid>
    </Grid>
  };
}

RiskCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(RiskCategory);
