import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT'
  };

  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' }
  ];

  it('should return the default state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the data passed when the action FETCH_NOTIFICATIONS_SUCCESS is passed', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: notifications.map(notification => ({
        ...notification,
        isRead: false
      }))
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should update the correct item when the action MARK_AS_READ is passed', () => {
    const initialStateWithNotifications = {
      filter: 'DEFAULT',
      notifications: notifications.map(notification => ({
        ...notification,
        isRead: false
      }))
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: initialStateWithNotifications.notifications.map(notification =>
        notification.id === 2 ? { ...notification, isRead: true } : notification
      )
    };
    expect(notificationReducer(initialStateWithNotifications, action)).toEqual(expectedState);
  });

  it('should update the filter when the action SET_TYPE_FILTER is passed', () => {
    const initialStateWithNotifications = {
      filter: 'DEFAULT',
      notifications: notifications.map(notification => ({
        ...notification,
        isRead: false
      }))
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: initialStateWithNotifications.notifications
    };
    expect(notificationReducer(initialStateWithNotifications, action)).toEqual(expectedState);
  });
});
