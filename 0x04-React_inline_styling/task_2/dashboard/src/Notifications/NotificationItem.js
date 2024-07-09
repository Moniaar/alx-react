import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li 
            onClick={() => markAsRead(id)} 
            data-notification-type={type} 
            className={css(type === 'urgent' ? styles.urgent : styles.default)}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li 
            onClick={() => markAsRead(id)} 
            data-urgent 
            dangerouslySetInnerHTML={{ __html: html }} 
            className={css(styles.urgent)}
          />
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
