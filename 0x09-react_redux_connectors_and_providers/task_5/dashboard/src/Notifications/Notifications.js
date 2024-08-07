// Notifications.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import PropTypes from 'prop-types';

class Notifications extends Component {
  static propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {listNotifications.valueSeq().map(notification => (
            <li key={notification.get('id')}>{notification.get('value')}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: state.get('notifications'),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
