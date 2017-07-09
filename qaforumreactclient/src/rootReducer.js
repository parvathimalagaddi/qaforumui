import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import question from './reducers/question';
import answers from './reducers/answers';
export default combineReducers({
  flashMessages,
  auth,
  question,
  answers
});
