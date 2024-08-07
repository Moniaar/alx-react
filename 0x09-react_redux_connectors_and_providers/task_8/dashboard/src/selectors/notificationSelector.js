// selectors/notificationSelector.js

import { createSelector } from 'reselect';

// Selector to get the notifications state
const notificationsState = (state) => state.get('notifications');

// Selector to get the filter state
const filterState = (state) => state.get('filter');

// Selector to get all notifications
const getNotifications = createSelector(
  [notificationsState],
  (notifications) => notifications.valueSeq().toList()
);

// Selector to get the current filter
const getFilter = createSelector(
  [filterState],
  (filter) => filter
);

// Memoized selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    return notifications.filter(notification => {
      const isUnread = !notification.get('isRead');
      const isUrgent = notification.get('type') === 'urgent';

      if (filter === 'default') {
        return isUnread;
      }
      if (filter === 'urgent') {
        return isUnread && isUrgent;
      }

      return isUnread;
    });
  }
);
