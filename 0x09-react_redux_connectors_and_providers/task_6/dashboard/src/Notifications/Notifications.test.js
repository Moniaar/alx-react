// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fromJS } from 'immutable';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} fetchNotifications={() => {}} markAsRead={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<Notifications listNotifications={[]} fetchNotifications={fetchNotificationsMock} markAsRead={() => {}} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should display notifications', () => {
    const notifications = fromJS([
      { id: 1, type: 'default', value: 'New notification', isRead: false },
    ]);
    const wrapper = shallow(<Notifications listNotifications={notifications} fetchNotifications={() => {}} markAsRead={() => {}} />);
    expect(wrapper.find('li').text()).toEqual('New notification');
  });

  it('should call markAsRead when a notification is clicked', () => {
    const markAsReadMock = jest.fn();
    const notifications = fromJS([
      { id: 1, type: 'default', value: 'New notification', isRead: false },
    ]);
    const wrapper = shallow(<Notifications listNotifications={notifications} fetchNotifications={() => {}} markAsRead={markAsReadMock} />);
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
