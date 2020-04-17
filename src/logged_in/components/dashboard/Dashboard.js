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
import _pick from 'lodash/pick';
import {Api} from '../../../api/Api';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Patient} from './Patient';

const styles = theme => ({
  leftPanel: {
    borderRight: `2px ${theme.palette.grey[300]} solid`
  }
});

const categoryPadding = 2;
const initialState = {
  patient: new Patient(),
  medicalSelections: {},
  otherConsiderationsSelection: {},
  riskScores: {},
  recommendation: {}
};

class Dashboard extends Component {
  static STATIC_RISK_CONFIG = {
    text: "Patient",
    key: "Patient",
    color: "#F08627",
    icon: AccountCircleOutlinedIcon
  };

  static MEDICAL_PRECONDITIONS_CONFIG = [
    {
      text: "Pulmonary",
      color: "#8716E0",
      icon: AirlineSeatFlatAngledOutlinedIcon,
      items: [
        {
          key: 'copd',
          text: 'COPD',
        },
        {
          key: 'smoker',
          text: 'Smoker',
        }
      ]
    },
    {
      text: "Cardiovalcular",
      color: "#E01683",
      icon: FavoriteBorderOutlinedIcon,
      items: [
        {
          key: 'htn',
          text: 'Hypertension',
        },
        {
          key: 'hd',
          text: 'Ischemic Heart Disease',
        },
        {
          key: 'chf',
          text: 'Heart failure'
        }
      ]
    },
    {
      text: "Other Conditions",
      color: "#00B0BB",
      icon: ListAltOutlinedIcon,
      items: [
        {
          key: 'dm',
          text: 'Diabetes Mellitus',
        },
        {
          key: 'aids',
          text: 'HIV/AIDS',
        },
        {
          key: 'dementia',
          text: 'Dementia'
        },
        {
          key: 'cld',
          text: 'Cirrhosis / Chronic Liver Disease'
        },
        {
          key: 'ckd',
          text: 'Chronic Kidney Disease'
        }
      ]
    }
  ];

  static HOME_ENV_CONFIG = {
    text: "Home Environment",
    color: "#06B30D",
    icon: HomeOutlinedIcon,
    items: [
      {
        key: 'mobility_problem',
        text: 'Immobile',
      },
      {
        key: 'potential_for_home_quarentine',
        text: 'Home quarantine is possible',
      },
      {
        key: 'todo missing',
        text: 'A member of the same household is in a risk group'
      }
    ]
  };

  static SCORE_CATEGORIES = [Dashboard.STATIC_RISK_CONFIG].concat(Dashboard.MEDICAL_PRECONDITIONS_CONFIG);

  constructor(props) {
    super(props);
    this.state = initialState;
    this.patient = new Patient();
    this.Api = new Api();
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onIDChange = this.onIDChange.bind(this);
    this.onMedicalItemChange = this.onMedicalItemChange.bind(this);
    this.onHomeEnvItemChange = this.onHomeEnvItemChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    initialState.patient = new Patient();
    this.setState(initialState);
    this.prepare();
  }

  onHomeEnvItemChange(category, categoryItem) {
    let item = this.state.otherConsiderationsSelection.items.find(item => item.key === categoryItem);
    item.selected = !item.selected;
    let patient = {...this.state.patient};
    patient.otherConsiderations[categoryItem] = item.selected;
    this.setState({otherConsiderationsSelection: this.state.otherConsiderationsSelection});
    this.setState({patient: this.state.patient});
    this.Api.updateRecommendation(this.state.patient);
  }

  onMedicalItemChange(category, categoryItem) {
    let item = this.state.medicalSelections[category].items.find(item => item.key === categoryItem);
    item.selected = !item.selected;
    this.patient.medicalPreconditions[categoryItem] = item.selected;
    this.setState({selections: this.state.medicalSelections});
    this.setState({patient: this.patient});
    this.updateMedicalPreconditionsScore(category, item);
  }

  async updateMedicalPreconditionsScore(category, item) {
    let categoryKeys = Dashboard.MEDICAL_PRECONDITIONS_CONFIG.find(a => a.text === category).items.map(a => a.key);
    let riskScores = {...this.state.riskScores};
    let recommendation = await this.Api.updateRecommendation(this.patient);
    let categoryFactors = _pick(recommendation.contributing_factors, categoryKeys);
    item.contribution = categoryFactors[item.key];
    riskScores[category] = Object.values(categoryFactors).reduce((a, b) => a + b, 0);
    this.setState({riskScores, recommendation});
  }

  onAgeChange(age) {
    this.patient.information.age = age;
    this.updatePatientState();
  }

  onGenderChange(gender) {
    this.patient.information.gender = gender;
    this.updatePatientState();
  }

  async updatePatientState() {
    this.setState({patient: this.patient});
    let riskScores = {...this.state.riskScores};
    let recommendation = await this.Api.updateRecommendation(this.state.patient);
    riskScores.Patient = this.Api.getPatientScore(recommendation);
    this.setState({riskScores, recommendation});
  }

  onIDChange(event) {
    this.setState({id: event.target.value});
  }

  prepare() {
    let medicalSelections = {...this.state.medicalSelections};
    let otherConsiderationsSelection = {...this.state.otherConsiderationsSelection};
    // eslint-disable-next-line no-sequences
    Object.assign(this.state.riskScores, Dashboard.SCORE_CATEGORIES.map(o => o.text).reduce((a,b) => (a[b] = 0, a),{}));
    Dashboard.MEDICAL_PRECONDITIONS_CONFIG.forEach(category => {
      medicalSelections[category.text] = category;
      medicalSelections[category.text].items = medicalSelections[category.text].items.map(item => { return {...item, selected: false, contribution: 0}});
    });

    otherConsiderationsSelection = Dashboard.HOME_ENV_CONFIG;
    otherConsiderationsSelection.items = otherConsiderationsSelection.items.map(item => { return {...item, selected: false}});
    this.setState({medicalSelections, otherConsiderationsSelection});
  }

  render() {
    const { classes } = this.props;
    return <Grid container>
      <Grid item md={8} className={classes.leftPanel}>
        <Box py={categoryPadding}>
          <PatientInfo color={Dashboard.STATIC_RISK_CONFIG.color}
                       icon={Dashboard.STATIC_RISK_CONFIG.icon}
                       patient={this.state.patient}
                       onPatientAgeChange={this.onAgeChange}
                       onPatientGenderChange={this.onGenderChange}
                       onIDChange={this.onIDChange}>
          </PatientInfo>
        </Box>
        <Divider light/>
        {Object.keys(this.state.medicalSelections).map(categoryKey =>
          <div key={categoryKey}>
            <Box py={categoryPadding}>
              <RiskCategory onSelectionChange={this.onMedicalItemChange}
                            items={this.state.medicalSelections[categoryKey].items}
                            icon={this.state.medicalSelections[categoryKey].icon}
                            color={this.state.medicalSelections[categoryKey].color}
                            categoryName={categoryKey}/>
            </Box>
            <Divider light/>
          </div>
        )}
        {this.state.otherConsiderationsSelection.items &&
          <Box py={categoryPadding}>
            <RiskCategory onSelectionChange={this.onHomeEnvItemChange}
                          items={this.state.otherConsiderationsSelection.items}
                          icon={Dashboard.HOME_ENV_CONFIG.icon}
                          color={Dashboard.HOME_ENV_CONFIG.color}
                          categoryName={Dashboard.HOME_ENV_CONFIG.text}/>
          </Box>
        }
        <Box py={categoryPadding}>
          <Vitals data={{}}
                  onPatientAgeChange={this.onAgeChange}
                  onIDChange={this.onIDChange}>
          </Vitals>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Summary riskScores={this.state.riskScores} recommendation={this.state.recommendation} onClearAll={this.reset}/>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
