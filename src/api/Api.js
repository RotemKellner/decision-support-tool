import axios from 'axios';

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

  getPatientScore(recommendation) {
    return Math.max(0, recommendation.risk_score - Object.values(recommendation.contributing_factors).reduce((a,b) => a+b , 0));
  }
}

export {Api};