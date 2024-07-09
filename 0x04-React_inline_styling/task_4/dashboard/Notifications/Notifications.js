import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css, keyframes } from 'aphrodite';
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

const fadeIn = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

const bounce = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
});

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    zIndex: '100',
    transition: 'opacity 0.3s ease-in-out',
    ':hover': {
      animationName: fadeIn,
      animationDuration: '1s',
      animationIterationCount: '3',
      animationFillMode: 'forwards',
    },
  },
  notificationsPanel: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '100',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  notificationsList: {
    listStyleType: 'none',
    padding: '0',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true,
    };

    this.markAsRead = this.markAsRead.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }

  render() {
    const { listNotifications } = this.props;
    const { showMenu } = this.state;

    return (
      <React.Fragment>
        {showMenu && (
          <div
            className={css(styles.menuItem)}
            onClick={this.toggleMenu}
            onMouseEnter={() => {
              this.forceUpdate();
            }}
          >
            Notifications
          </div>
        )}
        {showMenu && (
          <div className={css(styles.notificationsPanel)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={this.toggleMenu}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {listNotifications.length > 0 ? (
              <ul className={css(styles.notificationsList)}>
                {listNotifications.map((val, idx) => (
                  <NotificationItem
                    key={val.id}
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                ))}
              </ul>
            ) : (
              <NotificationItem type="default" value="No new notification for now" />
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
