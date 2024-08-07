// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './actions/userActionCreators';  // Adjust import based on your setup
import { fetchNotifications } from './actions/notificationActionCreators';
import './App.css';  // Import your CSS file if needed

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
    fetchNotifications: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    login: () => {},
    logout: () => {},
    fetchNotifications: () => {},
  };

  componentDidMount() {
    this.props.fetchNotifications();  // Fetch notifications when the component mounts
  }

  render() {
    const { isLoggedIn, displayDrawer, logout } = this.props;

    return (
      <div className="App">
        <header>
          <h1>My App</h1>
          {isLoggedIn && <button onClick={logout}>Logout</button>}
        </header>
        {displayDrawer && <div className="drawer">Drawer Content</div>}
      </div>
    );
  }
}

// Map state and actions to props
const mapStateToProps = (state) => ({
  isLoggedIn: state.getIn(['ui', 'isUserLoggedIn']),
  displayDrawer: state.getIn(['ui', 'isNotificationDrawerVisible']),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
