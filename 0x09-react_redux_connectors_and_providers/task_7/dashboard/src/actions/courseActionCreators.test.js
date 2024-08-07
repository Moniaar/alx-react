// actions/courseActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, setCourses } from './courseActionCreators';
import { SET_COURSES } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_COURSES when fetching courses has been done', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];

    fetchMock.getOnce('/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: SET_COURSES,
        payload: courses,
      },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles errors appropriately', () => {
    fetchMock.getOnce('/courses.json', {
      throws: new Error('Network Error'),
    });

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).catch(() => {
      expect(store.getActions()).toEqual([]);
      // Add additional assertions for error handling if needed
    });
  });
});
