import axios from 'axios';
import md5 from 'md5';

class Api {
  constructor() {
    this.baseURL = 'https://cn8pc7plbl.execute-api.eu-west-1.amazonaws.com/staging/';
    this.config = {
      headers: {'Content-Type': 'application/json', 'x-api-key': 'inawDBjEa12HYpdIvkUDpaxAcdKA3l4Da7aWcTr7'}
    }
  }

  async updateRecommendation(patient) {
    return axios.post(this.baseURL + 'getPatientModelRecommendation', patient.toServerModel(), this.config).then(a => a.data.recommendation);
  }

  async getUserInfo(id) {
    return axios.post(this.baseURL + 'getRecordsByPatient', {patient_id: md5(id)}, this.config).then(a => Object.values(a.data || {})[0]);
  }

  getPatientScore(recommendation) {
    return Math.max(0, recommendation.risk_score - Object.values(recommendation.contributing_factors).reduce((a,b) => a+b , 0));
  }
}

export {Api};