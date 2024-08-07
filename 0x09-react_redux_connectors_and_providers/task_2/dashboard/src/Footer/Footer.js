// Footer/Footer.js

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <footer>
        <p>&copy; 2024 Your Company</p>
        {user ? (
          <p>Logged in as: {user.get('username')}</p>
        ) : (
          <p>You are not logged in</p>
        )}
      </footer>
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
Footer.propTypes = {
  user: PropTypes.object,
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(Footer);
