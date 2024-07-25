// schema/notifications.js
import * as notificationsData from './notifications.json';

/**
 * Get all notifications for a specific user by userId
 * @param {string} userId - The user ID
 * @returns {Array} - List of notification context objects for the user
 */
export function getAllNotificationsByUser(userId) {
  const notifications = notificationsData.default.notifications;
  return notifications
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}
