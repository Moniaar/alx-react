// src/actions/courseActionCreators.js
import { selectCourse as selectCourseAction, unSelectCourse as unSelectCourseAction } from './courseActionCreators';
import { bindActionCreators } from 'redux';

// Create a function to bind the action creators
export const boundCourseActionCreators = (dispatch) => (
  bindActionCreators({
    selectCourse: selectCourseAction,
    unSelectCourse: unSelectCourseAction
  }, dispatch)
);
