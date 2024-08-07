// Header/Header.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Header, { mapStateToProps } from './Header';
import { fromJS } from 'immutable';
import { logout } from '../actions/authActions';

describe('Header Component', () => {
  it('should render correctly when user is logged in', () => {
    const props = {
      user: fromJS({ username: 'admin' }),
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('span').text()).toBe('Logged in as: admin');
  });

  it('should render correctly when user is not logged in', () => {
    const props = {
      user: null,
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('span').text()).toBe('You are not logged in');
  });

  it('should call logout when logout link is clicked', () => {
    const logoutMock = jest.fn();
    const props = {
      user: fromJS({ username: 'admin' }),
      logout: logoutMock,
    };
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('a').simulate('click', { preventDefault() {} });
    expect(logoutMock).toHaveBeenCalled();
  });

  it('mapStateToProps should map the state to props correctly', () => {
    const state = fromJS({
      user: { username: 'admin' },
    });
    const expectedProps = {
      user: { username: 'admin' },
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
