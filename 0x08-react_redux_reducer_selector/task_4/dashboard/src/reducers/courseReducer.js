import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map(),
});

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep(fromJS({ courses: normalizedData.entities.courses }));

    case SELECT_COURSE:
      return state.setIn(['courses', action.index.toString(), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index.toString(), 'isSelected'], false);

    default:
      return state;
  }
}

export default courseReducer;
