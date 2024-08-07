// reducers/notificationReducer.test.js

import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

describe('notificationReducer', () => {
  it('should handle SET_LOADING_STATE', () => {
    const initialState = fromJS({
      loading: false,
      notifications: {},
    });

    const action = {
      type: SET_LOADING_STATE,
      payload: true,
    };

    const expectedState = fromJS({
      loading: true,
      notifications: {},
    });

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = fromJS({
      loading: false,
      notifications: {},
    });

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: [
        { id: 1, type: 'default', value: 'New notification' },
      ],
    };

    const expectedState = fromJS({
      loading: false,
      notifications: [
        { id: 1, type: 'default', value: 'New notification' },
      ],
    });

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
