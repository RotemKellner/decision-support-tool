import React, {Component} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const styles = theme => ({

});

class LargeIcon extends Component {
  render() {
    const Icon = this.props.icon;
    return <Box style={{ display: 'inline-block' }} fontSize={32}><Icon style={{ display: 'flex', color: this.props.color }} fontSize={'inherit'}/></Box>
  };
}

LargeIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]),
  color: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(LargeIcon);
