// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { Map, fromJS } from 'immutable';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications listNotifications={Map()} fetchNotifications={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<Notifications listNotifications={Map()} fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should display notifications', () => {
    const notifications = fromJS([
      { id: 1, type: 'default', value: 'New notification' },
    ]);
    const wrapper = shallow(<Notifications listNotifications={notifications} fetchNotifications={() => {}} />);
    expect(wrapper.find('li').text()).toEqual('New notification');
  });
});
