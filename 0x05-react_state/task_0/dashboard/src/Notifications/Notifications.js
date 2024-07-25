import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" className={css(styles.closeIcon)} />
            </button>
            {this.props.listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  notifications: {
    border: '1px dashed #E1354B',
    padding: '10px',
    position: 'absolute',
    right: '10px',
    top: '10px',
    backgroundColor: 'white',
    width: '300px',
    zIndex: '1',
  },
  closeButton: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '15px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    outline: 'none',
  },
  closeIcon: {
    width: '10px',
  },
});

export default Notifications;
