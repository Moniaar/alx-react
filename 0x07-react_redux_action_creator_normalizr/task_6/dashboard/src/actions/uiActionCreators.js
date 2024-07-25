// src/actions/uiActionCreators.js
import { login as loginAction, logout as logoutAction, displayNotificationDrawer as displayNotificationDrawerAction, hideNotificationDrawer as hideNotificationDrawerAction } from './uiActionCreators';
import { bindActionCreators } from 'redux';

// Create a function to bind the action creators
export const boundUIActionCreators = (dispatch) => (
  bindActionCreators({
    login: loginAction,
    logout: logoutAction,
    displayNotificationDrawer: displayNotificationDrawerAction,
    hideNotificationDrawer: hideNotificationDrawerAction
  }, dispatch)
);
