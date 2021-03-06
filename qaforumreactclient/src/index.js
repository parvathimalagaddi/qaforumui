import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import routes from './routes';
import rootReducer from './rootReducer';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import setAuthorizationToken from './utils/setAuthorizationToken';
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
);
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  let authObj = jwtDecode(localStorage.jwtToken);
  let userProfile ={};
  if(localStorage.userProfile) {
    userProfile = JSON.parse(localStorage.userProfile);
    authObj.userProfile = userProfile;
  }

  store.dispatch(setCurrentUser(authObj));
}
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
</Provider>, document.getElementById('app'));
