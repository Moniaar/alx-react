// selectors/courseSelector.test.js

import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('getAllCourses selector', () => {
  it('should return a List of all courses', () => {
    // Initial state with courses
    const state = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' },
        3: { id: 3, name: 'Course 3' },
      },
    });

    // Expected result
    const expectedCourses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ];

    // Selector result
    const result = getAllCourses(state);

    expect(result.toJS()).toEqual(expectedCourses);
  });

  it('should return an empty List when there are no courses', () => {
    // Initial state without courses
    const state = fromJS({
      courses: {},
    });

    // Expected result
    const expectedCourses = [];

    // Selector result
    const result = getAllCourses(state);

    expect(result.toJS()).toEqual(expectedCourses);
  });
});
