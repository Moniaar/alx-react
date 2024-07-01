import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input name="email" id="email" type="text" />
      <label htmlFor="password">Password: </label>
      <input name="password" id="password" type="password" />
      <button>OK</button>
    </React.Fragment>
  );
}

export default Login;
