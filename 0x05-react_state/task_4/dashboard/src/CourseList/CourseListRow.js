import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerCell: {
    fontWeight: 'bold',
    padding: '8px',
    textAlign: 'left',
  },
  defaultCell: {
    padding: '8px',
    textAlign: 'left',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <tr className={css(isHeader ? styles.headerRow : checked ? styles.rowChecked : styles.defaultRow)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.headerCell)} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.defaultCell)}>
            <input type="checkbox" onChange={handleCheckboxChange} checked={checked} />
            {textFirstCell}
          </td>
          <td className={css(styles.defaultCell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
