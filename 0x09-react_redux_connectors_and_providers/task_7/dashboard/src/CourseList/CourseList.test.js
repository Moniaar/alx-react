// CourseList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList'; // Import the unconnected version for testing
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('CourseList Component', () => {
  let wrapper;
  const fetchCoursesMock = jest.fn();
  const selectCourseMock = jest.fn();
  const unSelectCourseMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        courses={[{ id: '1', name: 'Course 1', isSelected: false }]}
        fetchCourses={fetchCoursesMock}
        selectCourse={selectCourseMock}
        unSelectCourse={unSelectCourseMock}
      />
    );
  });

  it('should dispatch fetchCourses on component mount', () => {
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('should dispatch selectCourse when a row is checked', () => {
    wrapper.instance().onChangeRow('1', true);
    expect(selectCourseMock).toHaveBeenCalledWith('1');
  });

  it('should dispatch unSelectCourse when a row is unchecked', () => {
    wrapper.instance().onChangeRow('1', false);
    expect(unSelectCourseMock).toHaveBeenCalledWith('1');
  });
});
