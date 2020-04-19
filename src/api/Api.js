import axios from 'axios';
import { Auth } from "aws-amplify";
import md5 from 'md5';

axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axios.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
})

class Api {
  constructor() {
    this.baseURL = 'https://cn8pc7plbl.execute-api.eu-west-1.amazonaws.com/staging/';
    // this.baseURL = 'https://cn8pc7plbl.execute-api.eu-west-1.amazonaws.com/staging-auth/';
    
    this.config = {
      headers: {
        'Content-Type': 'application/json', 
        'x-api-key': 'inawDBjEa12HYpdIvkUDpaxAcdKA3l4Da7aWcTr7'
      }
    }
  }
  
  async __getConfigWithAuthHeader() {
    const headers = {...this.config.headers, 
      'Authorization': `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` 
    }
    return {...this.config, headers: headers}
  }

  async updateRecommendation(patient) {
    const config = await this.__getConfigWithAuthHeader();
    
    return axios.post(this.baseURL + 'getPatientModelRecommendation', patient.toServerModel(), config).then(a => a.data.recommendation);
  }

  async getUserInfo(id) {
    const config = await this.__getConfigWithAuthHeader();
    return axios.post(this.baseURL + 'getRecordsByPatient', {patient_id: md5(id)}, config).then(a => Object.values(a.data || {})[0]);
  }
}

export {Api};