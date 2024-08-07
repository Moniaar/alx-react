// App/App.js

import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
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
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(App);
