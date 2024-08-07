// selectors/notificationSelector.test.js

import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('getUnreadNotificationsByType selector', () => {
  it('should return all unread notifications when filter is default', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, isRead: false, type: 'info' },
        2: { id: 2, isRead: true, type: 'urgent' },
        3: { id: 3, isRead: false, type: 'urgent' },
      },
      filter: 'default',
    });

    const expectedNotifications = [
      { id: 1, isRead: false, type: 'info' },
      { id: 3, isRead: false, type: 'urgent' },
    ];

    const result = getUnreadNotificationsByType(state);

    expect(result.toJS()).toEqual(expectedNotifications);
  });

  it('should return unread and urgent notifications when filter is urgent', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, isRead: false, type: 'info' },
        2: { id: 2, isRead: true, type: 'urgent' },
        3: { id: 3, isRead: false, type: 'urgent' },
      },
      filter: 'urgent',
    });

    const expectedNotifications = [
      { id: 3, isRead: false, type: 'urgent' },
    ];

    const result = getUnreadNotificationsByType(state);

    expect(result.toJS()).toEqual(expectedNotifications);
  });

  it('should return an empty list when there are no unread notifications and filter is urgent', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, isRead: true, type: 'info' },
        2: { id: 2, isRead: true, type: 'urgent' },
      },
      filter: 'urgent',
    });

    const expectedNotifications = [];

    const result = getUnreadNotificationsByType(state);

    expect(result.toJS()).toEqual(expectedNotifications);
  });

  it('should return an empty list when there are no notifications and filter is urgent', () => {
    const state = fromJS({
      notifications: {},
      filter: 'urgent',
    });

    const expectedNotifications = [];

    const result = getUnreadNotificationsByType(state);

    expect(result.toJS()).toEqual(expectedNotifications);
  });
});
