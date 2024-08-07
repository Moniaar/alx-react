// NotificationsContainer.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { fetchNotifications, setNotificationFilter } from '../actions/notificationActionCreators';

const NotificationsContainer = ({ notifications, fetchNotifications, setNotificationFilter }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      notifications={notifications}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

NotificationsContainer.propTypes = {
  notifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
