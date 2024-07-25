// src/actions/uiActionCreators.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch'; // or use a compatible fetch library

// Action creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

// Async action creator
export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));

  try {
    const response = await fetch('/login-success.json');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const user = await response.json();
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
