import axios from 'axios';
import {FETCH_USERS, FETCH_USER} from './types';

export function fetchUsers() {
  let url = '/api/v1/user/';
  return (dispatch) => {
    return axios.get(url).then(res => {
      console.log("FETCH users");
      console.log(res);
      const users = res.data;
      dispatch({
					type: FETCH_USERS,
					payload: users
				});
    });
  }
}

export function fetchUser(username) {
  return {
    type: FETCH_USER,
    payload: username
  };
}
