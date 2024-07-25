// src/actions/notificationActionCreators.js
import { markAsRead as markAsReadAction, setNotificationFilter as setNotificationFilterAction } from './notificationActionCreators';
import { bindActionCreators } from 'redux';

// Create a function to bind the action creators
export const boundNotificationActionCreators = (dispatch) => (
  bindActionCreators({
    markAsRead: markAsReadAction,
    setNotificationFilter: setNotificationFilterAction
  }, dispatch)
);
