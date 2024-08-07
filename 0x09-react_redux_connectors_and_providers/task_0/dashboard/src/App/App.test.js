// App/App.test.js

import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the correct object', () => {
    const state = fromJS({
      isUserLoggedIn: true
    });
    const expectedProps = {
      isLoggedIn: true
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
