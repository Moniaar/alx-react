// App/App.test.js

import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the correct object for isLoggedIn', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should return the correct object for displayDrawer', () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true
    });
    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: true
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
