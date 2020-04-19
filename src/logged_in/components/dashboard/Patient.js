import _cloneDeep from 'lodash/cloneDeep';
import getUuid from 'uuid-by-string';

class Patient {
  constructor() {
    this.id = '';
    this.information = {
      age: 0,
      gender: ''
    };
    this.coronaPositive = false;
    this.medicalPreconditions = {
      copd: false,
      htn: false,
      dm: false,
      smoker: false,
      cad: false,
      chf: false,
      ckd: false,
      hd: false,
      cld: false,
      dementia: false,
      cancer: false,
      aids: false
    };
    this.clinicalStatus = {
      temperature: 0,
      pulse: 0,
      respiratory_rate: 0,
      auscultation: 0,
      mental_status: 0,
      oxygen_saturation: 0
    };

    this.treatment = {
      psychiatric_treatment: false,
      anti_inflamatory_regular_treatment: false,
      growth_hormone_children: false,
      immuno_depressant_drugs: false
    };

    this.otherConsiderations = {
      mobility_problem: false,
      potential_for_home_quarentine: false,
      pregnent_healthy: false,
      youngs_with_asthma: false
    }
  }

  toServerModel() {
    let patient = _cloneDeep(this);
    return {
      patient_id: getUuid(patient.id),
      patient_information: this.BoolToNum(patient.information),
      corona_status: {
        corona_positive: patient.coronaPositive
      },
      medical_preconditions: this.BoolToNum(patient.medicalPreconditions),
      clinical_status: this.BoolToNum(patient.clinicalStatus),
      treatment: this.BoolToNum(patient.treatment),
      other_considerations: this.BoolToNum(patient.otherConsiderations)
    };
  }

  toClientModel(id, userInfo) {
    let patient = new Patient();
    patient.id = id;
    patient.information = userInfo.patient_information;
    patient.medicalPreconditions = this.NumToBool(userInfo.medical_preconditions);
    patient.clinicalStatus = userInfo.clinical_status;
    patient.coronaPositive = userInfo.corona_status.corona_positive;
    patient.treatment = this.NumToBool(userInfo.treatment);
    patient.otherConsiderations = this.NumToBool(userInfo.other_considerations);
    return patient;
  }

  BoolToNum(object) {
    const returnObject = {};
    for (const [key, value] of Object.entries(object)) {
      returnObject[key] = typeof value === 'boolean' ? Number(value) : value;
    }
    return returnObject
  }

  NumToBool(object) {
    const returnObject = {}
    for (const [key, value] of Object.entries(object)) {
      returnObject[key] = typeof value === 'number' ? Boolean(value) : value;
    }
    return returnObject
  }

}

export {Patient};