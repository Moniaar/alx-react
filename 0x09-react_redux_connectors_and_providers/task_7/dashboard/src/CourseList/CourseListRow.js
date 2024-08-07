// CourseListRow.js

import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ id, name, isChecked, onChangeRow }) => {
  const handleChange = (event) => {
    onChangeRow(id, event.target.checked);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChangeRow: PropTypes.func.isRequired,
};

export default CourseListRow;
