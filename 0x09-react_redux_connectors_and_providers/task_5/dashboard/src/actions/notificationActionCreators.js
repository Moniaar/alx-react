// reducers/notificationReducer.js

import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

const initialState = Map({
  isLoading: false,
  notifications: [],
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('isLoading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', action.payload);

    default:
      return state;
  }
};

export default notificationReducer;
