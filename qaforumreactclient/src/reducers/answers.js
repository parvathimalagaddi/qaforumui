import {FETCH_QUESTION} from '../actions/types';


export default (currentState = [], action = {}) => {
  switch(action.type){
          case 'FETCH_QUESTION':
  					currentState = action.payload;
  					return currentState;
				default :
					return currentState;
			}
}
