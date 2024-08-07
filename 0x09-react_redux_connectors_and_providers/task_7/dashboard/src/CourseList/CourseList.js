// CourseList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;

    return (
      <div>
        <h2>Course List</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Is Selected</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <CourseListRow
                key={course.id}
                id={course.id}
                name={course.name}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
