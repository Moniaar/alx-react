// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications'; // Import the unconnected version for testing
import { setNotificationFilter } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  let wrapper;
  const setNotificationFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={[{ id: '1', message: 'Notification 1' }]}
        setNotificationFilter={setNotificationFilterMock}
      />
    );
  });

  it('should dispatch setNotificationFilter with "urgent" when urgent button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('urgent');
  });

  it('should dispatch setNotificationFilter with "default" when default button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('default');
  });
});
