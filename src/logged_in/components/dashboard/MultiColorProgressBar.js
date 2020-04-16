import {withStyles} from '@material-ui/core';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MultiColorProgressBar.css';

const styles = theme => ({

});

class MultiColorProgressBar extends Component {
  render() {
    const parent = this.props;

    let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.percent > 0) {
        return (
          <div className="value" style={{'color': item.color, 'width': item.percent + '%'}}  key={i}>
            <span>{item.value}</span>
          </div>
        )
      }
      return null;
    }, this);

    let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.percent > 0) {
        return (
          <div className="graduation" style={{'color': item.color, 'width': item.percent + '%'}}  key={i}>
            <span>|</span>
          </div>
        )
      }
      return null;
    }, this);

    let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.percent > 0) {
        return (
          <div className="bar" style={{'backgroundColor': item.color, 'width': item.percent + '%'}}  key={i}>

          </div>
        )
      }
      return null;
    }, this);

    return (
      <div className="multicolor-bar">
        <div className="values">
          {values === ''?'':values}
        </div>
        <div className="scale">
          {calibrations === ''?'':calibrations}
        </div>
        <div className="bars">
          {bars === ''?'':bars}
        </div>
      </div>
    );
  }
}

MultiColorProgressBar.propTypes = {
  readings: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(MultiColorProgressBar);
