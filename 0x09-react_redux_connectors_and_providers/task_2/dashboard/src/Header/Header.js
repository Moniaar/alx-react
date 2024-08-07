// Header/Header.js

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Header extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <header>
        <h1>Welcome to the Application</h1>
        {user ? (
          <div>
            <span>Logged in as: {user.get('username')}</span>
            <a href="#" onClick={this.handleLogout}>Logout</a>
          </div>
        ) : (
          <span>You are not logged in</span>
        )}
      </header>
    );
  }
}

// This function maps the Redux state to the component's props
const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

// Define propTypes for the component
Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

// Connect the component to the Redux store and the logout action creator
export default connect(mapStateToProps, { logout })(Header);
