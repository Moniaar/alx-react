// reducers/notificationReducer.js

import { Map, fromJS } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

const initialState = Map({
  loading: false,
  notifications: Map({}), // Initialize with an empty Map
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Use mergeDeep to handle nested structures and ensure proper merging
      return state.mergeDeep({
        notifications: fromJS(action.payload), // Convert payload to Immutable Map
      });

    default:
      return state;
  }
};

export default notificationReducer;
