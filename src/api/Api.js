import md5 from 'md5';
import {Auth, API} from 'aws-amplify';
import {Endpoints} from '../aws-exports';

class Api {
  async getHeaders() {
    return {'Authorization': `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`}
  }

  async updateRecommendation(patient) {
    let body = patient.toServerModel();
    return API.post(Endpoints.stagingAuth, '/getPatientModelRecommendation', {body, headers: await this.getHeaders()}).then(a => a.recommendation);
  }

  async getUserInfo(id) {
    let body = {patient_id: md5(id)};
    return API.post(Endpoints.stagingAuth, '/getRecordsByPatient', {body, headers: await this.getHeaders()}).then(a => Object.values(a || {})[0]);
  }
}

export {Api};