// selectors/courseSelector.js

import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const coursesState = (state) => state.get('courses');

export const getAllCourses = createSelector(
  [coursesState],
  (courses) => courses.valueSeq().toList()
);
