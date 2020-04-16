import React, {Component} from 'react';
import PatientInfo from "./PatientInfo";
import {Grid, withStyles} from '@material-ui/core';
import Summary from './Summary';
import RiskCategory from './RiskCategory';
import AirlineSeatFlatAngledOutlinedIcon from '@material-ui/icons/AirlineSeatFlatAngledOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Vitals from './Vitals';
import _cloneDeep from 'lodash/cloneDeep';

const styles = theme => ({
  leftPanel: {
    borderRight: `2px ${theme.palette.grey[300]} solid`
  }
});

const FACTOR = 0.9;
const categoryPadding = 2;
const otherConditions = 'Other Conditions';
const homeEnvironment = 'Home Environment';
const initialState = {
  id: 0,
  riskScores: {},
  totalRiskScore: 0,
  selections: {}
};

class Dashboard extends Component {
  static STATIC_RISK_CONFIG = {
    patient: {
      color: '#F08627'
    }
  };

  static DYNAMIC_RISK_CONFIG = {
    Pulmonary: {
      color: '#8716E0',
      icon: AirlineSeatFlatAngledOutlinedIcon,
      items: ['COPD', 'Smoker']
    },
    Cardiovalcular: {
      color: '#E01683',
      icon: FavoriteBorderOutlinedIcon,
      items: ['Hypertension', 'Ischemic Heart Disease', 'Heart failure']
    },
    [otherConditions]: {
      color: '#00B0BB',
      icon: ListAltOutlinedIcon,
      items: ['Diabetes Mellitus', 'HIV/AIDS', 'Dementia', 'Cirrhosis / Chronic Liver Disease', 'Chronic Kidney Disease']
    },
    [homeEnvironment]: {
      color: '#06B30D',
      icon: HomeOutlinedIcon,
      items: ['Immobile', 'Home quarantine is possible', 'A member of the same household is in a risk group']
    }
  };

  constructor(props) {
    super(props);
    this.state = _cloneDeep(initialState);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onIDChange = this.onIDChange.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onSelectionChange(category, categoryItem) {
    let selections = {...this.state.selections};
    let item = selections[category].items.find(item => item.key === categoryItem);
    item.selected = !item.selected;

    let riskScores = {...this.state.riskScores};
    riskScores[category] = selections[category].items.filter(item => item.selected).reduce(a => a + 0.9, 0);
    this.setState({selections});
    this.setState({riskScores});
    this.updateTotalRiskScore(riskScores);
  }

  onAgeChange(age) {
    let riskScores = {...this.state.riskScores};
    riskScores.patient = (age / 19.32) * FACTOR;
    this.setState({riskScores});
    this.updateTotalRiskScore(riskScores);
  }

  onIDChange(event) {
    this.setState({id: event.target.value});
  }

  updateTotalRiskScore(riskScores) {
    let totalRiskScore = Object.values(riskScores).reduce((a, b) => a + b, 0);
    let mortality = (1-(0.98916**(totalRiskScore)));
    this.setState({mortality, totalRiskScore})
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    let state = _cloneDeep(initialState);
    // eslint-disable-next-line no-sequences
    Object.assign(state.riskScores, Object.keys(Dashboard.STATIC_RISK_CONFIG).concat(Object.keys(Dashboard.DYNAMIC_RISK_CONFIG)).reduce((a,b) => (a[b] = 0, a),{}));
    Object.keys(Dashboard.DYNAMIC_RISK_CONFIG).forEach(key => {
      state.selections[key] = _cloneDeep(Dashboard.DYNAMIC_RISK_CONFIG[key]);
      state.selections[key].items = state.selections[key].items.map(item => { return {key: item, selected: false}});
    });
    this.setState(state);
  }

  render() {
    const { classes } = this.props;
    return <Grid container>
      <Grid item md={8} className={classes.leftPanel}>
        <Box py={categoryPadding}>
          <PatientInfo data={{}}
                       onPatientAgeChange={this.onAgeChange}
                       onIDChange={this.onIDChange}>
          </PatientInfo>
        </Box>
        <Divider light/>
        {Object.keys(this.state.selections).map(categoryKey =>
          <div key={categoryKey}>
            <Box py={categoryPadding}>
              <RiskCategory onSelectionChange={this.onSelectionChange}
                            items={this.state.selections[categoryKey].items}
                            icon={this.state.selections[categoryKey].icon}
                            color={this.state.selections[categoryKey].color}
                            categoryName={categoryKey}/>
            </Box>
            <Divider light/>
          </div>
        )}
        <Box py={categoryPadding}>
          <Vitals data={{}}
                  onPatientAgeChange={this.onAgeChange}
                  onIDChange={this.onIDChange}>
          </Vitals>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Summary riskScores={this.state.riskScores} totalRiskScore={this.state.totalRiskScore} onClearAll={this.reset}/>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
