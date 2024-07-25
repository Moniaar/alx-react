import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

describe('<Notifications />', () => {
  let wrapper;
  let handleDisplayDrawer;
  let handleHideDrawer;

  beforeEach(() => {
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
    wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components', () => {
    wrapper.setProps({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    });
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('renders correct text when listNotifications is empty', () => {
    expect(wrapper.find(NotificationItem).props().value).toEqual('No new notification for now');
  });

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the close button calls handleHideDrawer', () => {
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('.closeButton').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
