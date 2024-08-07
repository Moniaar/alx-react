// reducers/uiReducer.js

import { fromJS } from 'immutable';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions';

const initialState = fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: null,
  loading: false,
  error: null,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('loading', true).set('error', null);
    case LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', action.payload)  // Set user from action payload
        .set('loading', false);
    case LOGIN_FAILURE:
      return state.set('loading', false).set('error', action.error);
    case LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null)  // Clear user on logout
        .set('error', null);
    case 'SHOW_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);
    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
};

export default uiReducer;
