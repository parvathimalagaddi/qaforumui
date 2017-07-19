import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import question from './reducers/question';
import answers from './reducers/answers';
import user from './reducers/user';
import chatReducer from './reducers/chatReducer';
export default combineReducers({
  flashMessages,
  auth,
  question,
  answers,
  user,
  chatReducer
});
