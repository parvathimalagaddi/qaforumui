import { ADD_NEW, FETCH_QUESTIONS} from '../actions/types';


export default (currentState = [], action = {}) => {
  switch(action.type){
				case 'ADD_NEW':
					var newQuestion = {
						question : action.payload,
						username : action.username
					};
					return [...currentState, newQuestion];
          case 'FETCH_QUESTIONS':
  					currentState = action.payload;
  					return currentState;
				default :
					return currentState;
			}
}
