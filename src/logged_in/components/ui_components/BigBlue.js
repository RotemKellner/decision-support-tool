import React, {Component} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LargeIcon from './LargeIcon';

const size = 6;

const styles = theme => ({
  bigBox: {
    'width': `${2.93 * size}em`,
    'height': `${size}em`,
    borderRadius: '70px'
  },
  greyBox: {
    border: `1px solid ${theme.palette.common.lightGrey}`
  },
  blueBox: {
    background: 'linear-gradient(180deg, #125FC6 0%, #2F80ED 124.5%)',
  }
});

class BigBlue extends Component {
  render() {
    const { classes } = this.props;
    const Icon = this.props.icon;
    let finalClasses = classes.bigBox + ' ' + (this.props.disable ? classes.greyBox : classes.blueBox);
    return <div className={finalClasses}>
      {!this.props.disable && <Box color="white" fontSize={'43px'} textAlign={'center'} mt={1}><LargeIcon icon={Icon} color={'white'} style={{display: 'inline'}}/>{this.props.label}</Box>}
    </div>
  };
}

BigBlue.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  label: PropTypes.string,
  empty: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(BigBlue);
