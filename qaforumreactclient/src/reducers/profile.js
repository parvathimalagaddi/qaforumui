import {FETCH_USER} from '../actions/types';


export default (currentState = {}, action = {}) => {
  switch(action.type){
          case FETCH_USER:
  					currentState = action.payload[0];
  					return currentState;
				default :
					return currentState;
			}
}
