// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('should render correctly with given props', () => {
    const props = {
      notifications: [{ id: '1', message: 'Test notification' }],
      setNotificationFilter: jest.fn(),
    };

    const wrapper = shallow(<Notifications {...props} />);

    expect(wrapper.find('h2').text()).toBe('Here is the list of notifications');
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('li').text()).toBe('Test notification');
  });

  it('should call setNotificationFilter when filter buttons are clicked', () => {
    const props = {
      notifications: [],
      setNotificationFilter: jest.fn(),
    };

    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('button').at(0).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('urgent');

    wrapper.find('button').at(1).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('default');
  });
});
