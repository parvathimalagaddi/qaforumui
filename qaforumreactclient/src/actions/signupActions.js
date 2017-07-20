import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/v1/user/', userData);
  }
}

export function profileEdit(userData) {
  return dispatch => {
   return axios.put('/api/v1/user/'+userData.username+'/', userData);
  }
}
