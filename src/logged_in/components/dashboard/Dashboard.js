import React, {Component} from 'react';
import PatientInfo from "./PatientInfo";
import {Grid, withStyles} from '@material-ui/core';
import Summary from './Summary';
import RiskCategory from './RiskCategory';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Vitals from './Vitals';
import _pick from 'lodash/pick';
import {Api} from '../../../api/Api';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Patient} from './Patient';
import {LungsIcon, PulseIcon} from '../../../icons/icons';
import isIsraeliIdValid from 'israeli-id-validator';

const styles = theme => ({
  leftPanel: {
    boxShadow: `2px 0px 0px rgba(0, 0, 0, 0.12);`
  },
  divider: {
    height: 1
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
    color: "#8716E0",
    icon: AccountCircleOutlinedIcon
  };

  static MEDICAL_PRECONDITIONS_CONFIG = [
    {
      text: "Pulmonary",
      color: "#00B0BB",
      icon: LungsIcon,
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
          text: 'Heart Failure'
        }
      ]
    },
    {
      text: "Other Conditions",
      color: "#F08627",
      icon: AssignmentOutlinedIcon,
      items: [
        {
          key: 'dm',
          text: 'Diabetes Mellitus',
        },
        {
          key: 'aids',
          text: 'HIV / AIDS',
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
        },
        {
          key: 'cancer',
          text: 'Malignancy'
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

  static VITALS_CONFIG = {
    text: "Vitals",
    color: "#8716E0",
    icon: PulseIcon,
    items: [
      {text: 'Temperature', key: 'temperature', unit: 'Celsius'},
      {text: 'Pulse', key: 'pulse', unit: 'Per minute'},
      {text: 'Respiratory Rate', key: 'respiratory_rate', unit: 'Per minute'},
      {text: 'O2 Saturation', key: 'oxygen_saturation', unit: 'ABG'}
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
    this.onClinicalStatusChange = this.onClinicalStatusChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    this.patient = new Patient();
    initialState.patient = this.patient;
    this.setState(initialState);
    this.setSelections();
  }

  onHomeEnvItemChange(category, categoryItem) {
    let item = this.state.otherConsiderationsSelection.items.find(item => item.key === categoryItem);
    item.selected = !item.selected;
    this.patient.otherConsiderations[categoryItem] = item.selected;
    this.setState({patient: this.patient, otherConsiderationsSelection: this.state.otherConsiderationsSelection});
    this.Api.updateRecommendation(this.patient);
  }

  onMedicalItemChange(category, categoryItem) {
    let item = this.state.medicalSelections[category].items.find(item => item.key === categoryItem);
    item.selected = !item.selected;
    this.patient.medicalPreconditions[categoryItem] = item.selected;
    this.setState({patient: this.patient, selections: this.state.medicalSelections});
    this.updateScores();
  }

  async updateScores() {
    let riskScores = {...this.state.riskScores};
    let recommendation = await this.Api.updateRecommendation(this.patient);

    for (let category in this.state.medicalSelections) {
      this.state.medicalSelections[category].items.forEach(item => {
        item.contribution = recommendation.contributing_factors[item.key] ? recommendation.contributing_factors[item.key] : 0;
      });
      let categoryKeys = Dashboard.MEDICAL_PRECONDITIONS_CONFIG.find(a => a.text === category).items.map(a => a.key);
      let categoryFactors = _pick(recommendation.contributing_factors, categoryKeys);
      riskScores[category] = Object.values(categoryFactors).reduce((a, b) => a + b, 0);
    }

    riskScores.Patient = recommendation.contributing_factors.age;
    this.setState({riskScores, recommendation});
  }

  onAgeChange(age) {
    this.patient.information.age = age;
    this.setState({patient: this.patient});
    const MIN_AGE = 2;
    const MAX_AGE = 120;
    if (MIN_AGE <= age && age < MAX_AGE) {
      this.updateScores();
    }
  }

  onGenderChange(gender) {
    this.patient.information.gender = gender;
    this.setState({patient: this.patient});
    this.updateScores();
  }

  async onIDChange(event) {
    this.patient.id = event.target.value;
    this.setState({patient: this.patient});
    if (isIsraeliIdValid(this.patient.id)) {
      let userInfo = await this.Api.getUserInfo(this.patient.id);
      if (userInfo !== 'patient not found') {
        this.patient = this.patient.toClientModel(this.patient.id, userInfo)
        this.setSelections();
      }
      this.setState({patient: this.patient});
      this.updateScores();
    }
  }

  onClinicalStatusChange(key, value) {
    this.patient.clinicalStatus[key] = value;
    this.setState({patient: this.patient});
    this.Api.updateRecommendation(this.patient);
  }

  setSelections() {
    let medicalSelections = {...this.state.medicalSelections};
    let otherConsiderationsSelection = {...this.state.otherConsiderationsSelection};
    // eslint-disable-next-line no-sequences
    Object.assign(this.state.riskScores, Dashboard.SCORE_CATEGORIES.map(o => o.text).reduce((a,b) => (a[b] = 0, a),{}));
    Dashboard.MEDICAL_PRECONDITIONS_CONFIG.forEach(category => {
      medicalSelections[category.text] = category;
      medicalSelections[category.text].items = medicalSelections[category.text].items.map(item => {
        return {...item, selected: this.patient.medicalPreconditions[item.key], contribution: 0}
      });
    });

    otherConsiderationsSelection = Dashboard.HOME_ENV_CONFIG;
    otherConsiderationsSelection.items = otherConsiderationsSelection.items.map(item => {
      return {...item, selected: this.patient.otherConsiderations[item.key]}
    });
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
                       recommendation={this.state.recommendation}
                       onPatientAgeChange={this.onAgeChange}
                       onPatientGenderChange={this.onGenderChange}
                       onIDChange={this.onIDChange}/>
        </Box>
        <Divider light classes={{root: classes.divider}}/>
        {Object.keys(this.state.medicalSelections).map(categoryKey =>
          <div key={categoryKey}>
            <Box py={categoryPadding}>
              <RiskCategory onSelectionChange={this.onMedicalItemChange}
                            items={this.state.medicalSelections[categoryKey].items}
                            icon={this.state.medicalSelections[categoryKey].icon}
                            color={this.state.medicalSelections[categoryKey].color}
                            categoryName={categoryKey}/>
            </Box>
            <Divider light classes={{root: classes.divider}}/>
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
        <Divider light classes={{root: classes.divider}}/>
        <Box py={categoryPadding}>
          <Vitals color={Dashboard.VITALS_CONFIG.color}
                  icon={Dashboard.VITALS_CONFIG.icon}
                  items={Dashboard.VITALS_CONFIG.items}
                  patient={this.state.patient}
                  onClinicalStatusChange={this.onClinicalStatusChange}/>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Summary patient={this.state.patient} riskScores={this.state.riskScores} recommendation={this.state.recommendation} onClearAll={this.reset}/>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
