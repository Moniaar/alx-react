// reducers/rootReducer.test.js

import { combineReducers } from 'redux';
import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
