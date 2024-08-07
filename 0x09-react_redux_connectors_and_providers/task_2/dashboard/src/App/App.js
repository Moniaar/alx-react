// App/App.js

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest, logout } from '../actions/authActions';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, loading, error, login, logout } = this.props;

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {isLoggedIn ? (
          <div>
            <h1>Welcome back!</h1>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please log in</h1>
            <button onClick={() => login({ username: 'admin', password: 'password' })}>Login</button>
          </div>
        )}
        {displayDrawer && <div>Notification Drawer</div>}
        {/* Other components and elements */}
      </div>
    );
  }
}

// This function maps the Redux state to the component's props
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
    loading: state.get('loading'),
    error: state.get('error'),
  };
};

// Define propTypes for the component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

// Define defaultProps for the component
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  loading: false,
  error: null,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, { login: loginRequest, logout })(App);
