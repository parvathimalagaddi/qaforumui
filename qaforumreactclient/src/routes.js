import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import QuestionPage from './components/events/QuestionPage';
import QuestionAnswerComponent from './components/qacomponents/QuestionAnswerComponent';
import requireAuth from './utils/requireAuth';
export default (
  <Route path="/" component={App} >
  <IndexRoute component={Greetings} />
  <Route path="signup" component={SignupPage} />
  <Route path="login" component={LoginPage} />
  <Route path="new-questions" component={requireAuth(QuestionPage)} />
  <Route path="post-answer" component={requireAuth(QuestionAnswerComponent)} />
  </Route>

)
