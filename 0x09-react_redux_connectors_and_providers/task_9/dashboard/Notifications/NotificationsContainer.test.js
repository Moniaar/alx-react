// NotificationsContainer.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('NotificationsContainer', () => {
  it('should fetch notifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    const wrapper = shallow(
      <NotificationsContainer
        notifications={[]}
        fetchNotifications={fetchNotificationsMock}
        setNotificationFilter={() => {}}
      />
    );

    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
