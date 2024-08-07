// actions/courseActionCreators.js

import { SET_COURSES } from './actionTypes';
import fetch from 'cross-fetch';  // Make sure you have cross-fetch or a similar library installed

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const fetchCourses = () => (dispatch) => {
  return fetch('/courses.json')  // Adjust the path if necessary
    .then(response => response.json())
    .then(data => {
      dispatch(setCourses(data));
    })
    .catch(error => {
      console.error('Error fetching courses:', error);
      // Handle the error appropriately, maybe dispatch an error action
    });
};
