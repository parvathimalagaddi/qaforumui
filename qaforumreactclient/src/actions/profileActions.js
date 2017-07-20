import axios from 'axios';
import { FETCH_USER} from './types';

export function fetchUserProfile(username) {
  let url = '/api/v1/user/' + username +'/';
  return (dispatch) => {
    return axios.get(url).then(res => {
      console.log("FETCH user");
      console.log(res);
      const userProfile = res.data;
      dispatch({
					type: FETCH_USER,
					payload: userProfile
				});
    });
  }
}
