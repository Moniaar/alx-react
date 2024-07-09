import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    border: "1px solid #ddd",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#f5f5f5",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "8px",
    textAlign: "left",
  },
});

export default CourseList;
