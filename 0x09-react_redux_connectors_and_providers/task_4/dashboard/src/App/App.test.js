// App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App Component', () => {
  it('should render correctly when logged in', () => {
    const props = {
      isLoggedIn: true,
      displayDrawer: false,
      loading: false,
      error: null,
      login: jest.fn(),
      logout: jest.fn(),
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('button').text()).toBe('Logout');
  });

  it('should render correctly when not logged in', () => {
    const props = {
      isLoggedIn: false,
      displayDrawer: false,
      loading: false,
      error: null,
      login: jest.fn(),
      logout: jest.fn(),
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('button').text()).toBe('Login');
  });

  it('mapStateToProps should map the state to props correctly', () => {
    const state = fromJS({
      courses: {},
      notifications: {},
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
        user: { username: 'admin' },
        loading: false,
        error: null,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
