import {FETCH_QUESTION, ADD_ANSWER} from '../actions/types';


export default (currentState = [], action = {}) => {
  switch(action.type){
          case 'FETCH_QUESTION':
  					currentState = action.payload;
  					return currentState;
            case 'ADD_ANSWER':
            if(currentState.answers) {
              currentState.answers.push(action.answer);
            }
              return currentState;
				default :
					return currentState;
			}
}
