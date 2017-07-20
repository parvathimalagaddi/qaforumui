import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userProfile');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
export function login(data) {
  return dispatch => {
    return axios.post('/api/v1/user/ticket/', data).then(res => {
      console.log("AUTH ACTION");
      console.log(res);
      const token = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      console.log(jwtDecode(token));
      let tokenObj = jwtDecode(token);
      let url = '/api/v1/user/' + data.username +'/';
      axios.get(url).then(res => {
        console.log("FETCH user");
        console.log(res);
        const userProfile = res.data[0];
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        tokenObj.userProfile=userProfile;
        dispatch(setCurrentUser(tokenObj));
      });


    });
  }
}
