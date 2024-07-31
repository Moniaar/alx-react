import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = fromJS({
    courses: {}
  });

  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  it('should return the default state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the data passed when the action FETCH_COURSE_SUCCESS is passed', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const expectedState = fromJS({
      courses: {
        '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
        '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        '3': { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    expect(courseReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should update the correct item when the action SELECT_COURSE is passed', () => {
    const action = { type: SELECT_COURSE, index: 2 };
    const initialStateWithCourses = fromJS({
      courses: {
        '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
        '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        '3': { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    const expectedState = initialStateWithCourses.setIn(['courses', '2', 'isSelected'], true);
    expect(courseReducer(initialStateWithCourses, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should update the correct item when the action UNSELECT_COURSE is passed', () => {
    const action = { type: UNSELECT_COURSE, index: 2 };
    const initialStateWithCourses = fromJS({
      courses: {
        '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
        '2': { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        '3': { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    const expectedState = initialStateWithCourses.setIn(['courses', '2', 'isSelected'], false);
    expect(courseReducer(initialStateWithCourses, action).toJS()).toEqual(expectedState.toJS());
  });
});
