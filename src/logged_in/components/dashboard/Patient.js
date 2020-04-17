import _cloneDeep from 'lodash/cloneDeep';

class Patient {
  constructor() {
    this.id = '123';
    this.information = {
      age: 10,
      gender: 'male'
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

    this.treatMent = {
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
      patient_id: patient.id,
      patient_information: this.BoolToNum(patient.information),
      corona_status: {
        corona_positive: patient.coronaPositive
      },
      medical_preconditions: this.BoolToNum(patient.medicalPreconditions),
      clinical_status: this.BoolToNum(patient.clinicalStatus),
      treatment: this.BoolToNum(patient.treatMent),
      other_considerations: this.BoolToNum(patient.otherConsiderations)
    };
  }

  BoolToNum (object) {
    const returnObject = {}
    for (const [key, value] of Object.entries(object)) {
      returnObject[key] = typeof value === 'boolean' ? Number(value) : value;
    }
    return returnObject
  }

}

export {Patient};