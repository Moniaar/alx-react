import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './Login.css';

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: '10px',
  },
});

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>

      <div className={css(styles.inputContainer)}>
        <label htmlFor="email">Email:</label>
        <input name="email" id="email" type="text" />
      </div>

      <div className={css(styles.inputContainer)}>
        <label htmlFor="password">Password:</label>
        <input name="password" id="password" type="password" />
      </div>

      <div>
        <button>OK</button>
      </div>
    </div>
  );
}

export default Login;
