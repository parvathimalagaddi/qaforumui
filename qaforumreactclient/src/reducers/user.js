import { FETCH_USER, FETCH_USERS} from '../actions/types';
import findIndex from 'lodash/findIndex';

export default (currentState = [], action = {}) => {
  switch(action.type){
          case FETCH_USERS:
  					currentState = action.payload;
  					return currentState;
				default :
					return currentState;
			}
}
