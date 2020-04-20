import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Grid, ListItem, withStyles} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import theme from '../../../theme';
import LargeIcon from '../ui_components/LargeIcon';

const styles = theme => ({
  chipWrapper: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  }
});

class RiskCategory extends Component {
  getColor() {
    return this.props.items.find(a => a.selected) ? this.props.color : theme.palette.common.grey;
  }

  render() {
    const { classes } = this.props;
    const Icon = this.props.icon;
    return <Grid container spacing={2} alignItems={'center'}>
      <Grid item md={2}>
        <ListItem>
          <LargeIcon icon={Icon} color={this.getColor()}></LargeIcon>
          <Box m={1} color="text.primary" fontWeight={'bold'}>{this.props.categoryName}</Box>
        </ListItem>
      </Grid>
      <Grid item md={10} className={classes.chipWrapper}>
          {this.props.items && Object.keys(this.props.items).map((detail, id) => {
            let isSelected = this.props.items[detail].selected;
            let isContribution = Boolean(this.props.items[detail].contribution);
            let color = isSelected ? this.props.color : theme.palette.grey[600];
            let label = `${this.props.items[detail].text} ${isContribution ? '+'+this.props.items[detail].contribution: ''}`;
            return <Box key={id} fontWeight={isSelected ? 'bold' : 'normal'}><Chip
                         style={{backgroundColor: fade(color, 0.2), color}}
                         label={label}
                         onClick={this.props.onSelectionChange.bind(null, this.props.categoryName, this.props.items[detail].key)}/>
            </Box>;
          })}
      </Grid>
    </Grid>
  };
}

RiskCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]),
  color: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(RiskCategory);
