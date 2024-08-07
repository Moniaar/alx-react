// reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';
import { fromJS } from 'immutable';

describe('uiReducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const user = fromJS({ username: 'admin' });
    const action = {
      type: LOGIN_SUCCESS,
      payload: user,
    };
    const initialState = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
      user: null,
      loading: false,
      error: null,
    });
    const expectedState = initialState
      .set('isUserLoggedIn', true)
      .set('user', user)
      .set('loading', false);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = {
      type: LOGOUT,
    };
    const initialState = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
      user: { username: 'admin' },
      loading: false,
      error: null,
    });
    const expectedState = initialState
      .set('isUserLoggedIn', false)
      .set('user', null)
      .set('error', null);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
