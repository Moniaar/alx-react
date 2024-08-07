// actions/notificationActionCreators.test.js

import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create SET_LOADING_STATE action', () => {
    const action = setLoadingState(true);
    expect(action).toEqual({
      type: SET_LOADING_STATE,
      payload: true,
    });
  });

  it('should create FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notifications = [{ id: 1, type: 'default', value: 'New notification' }];
    const action = setNotifications(notifications);
    expect(action).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications,
    });
  });

  it('creates FETCH_NOTIFICATIONS_SUCCESS after fetching notifications', () => {
    fetchMock.getOnce('/notifications.json', {
      body: [{ id: 1, type: 'default', value: 'New notification' }],
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, payload: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, payload: [{ id: 1, type: 'default', value: 'New notification' }] },
      { type: SET_LOADING_STATE, payload: false }
    ];

    const store = mockStore({});

    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
