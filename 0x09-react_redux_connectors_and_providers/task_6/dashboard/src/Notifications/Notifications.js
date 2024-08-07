// Notifications.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationsSelectors';
import { markAsRead, fetchNotifications } from '../actions/notificationActionCreators';
import PropTypes from 'prop-types';

class Notifications extends Component {
  static propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    markAsRead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleNotificationClick = (id) => {
    this.props.markAsRead(id);
  };

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {listNotifications.map(notification => (
            <li key={notification.id} onClick={() => this.handleNotificationClick(notification.id)}>
              {notification.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
  markAsRead: (id) => dispatch(markAsRead(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
