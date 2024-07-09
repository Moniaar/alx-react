import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p className={css(styles.text)}>Login to access the full dashboard</p>
      <div className={css(styles.formGroup)}>
        <label htmlFor="email" className={css(styles.label)}>Email: </label>
        <input name="email" id="email" type="text" className={css(styles.input)} />
      </div>
      <div className={css(styles.formGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password: </label>
        <input name="password" id="password" type="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginRight: '10px',
  },
  input: {
    marginRight: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
});

export default Login;
