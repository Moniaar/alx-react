// Notifications.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

class Notifications extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    setNotificationFilter: PropTypes.func.isRequired,
  };

  handleFilterChange = (filter) => {
    this.props.setNotificationFilter(filter);
  };

  render() {
    const { notifications } = this.props;

    return (
      <div>
        <h2>Here is the list of notifications</h2>
        <button onClick={() => this.handleFilterChange('urgent')}>
          ‼️
        </button>
        <button onClick={() => this.handleFilterChange('default')}>
          💠
        </button>
        <ul>
          {notifications.map(notification => (
            <li key={notification.get('id')}>
              {notification.get('message')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
