// Notifications.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators'; // Import the fetchNotifications action creator

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Call fetchNotifications when the component mounts
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>{notification.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = (state) => ({
  listNotifications: state.get('notifications').toJS(), // Convert Immutable Map to JS
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()), // Map fetchNotifications action creator to props
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
