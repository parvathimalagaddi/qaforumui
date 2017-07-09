import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export function createEvent(question) {
  let token = localStorage.getItem('jwtToken');
  setAuthorizationToken(token);
  return dispatch => {
    return axios.post('/api/v1/question/', question);
  };
}

export function postAnswer(qid, answer) {
  let token = localStorage.getItem('jwtToken');
  setAuthorizationToken(token);
  return dispatch => {
    return axios.post('/api/v1/question/' + qid + '/answer/', answer);
  };
}
