import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton-logo.jpg';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #E1354B',
    padding: '10px 20px',
  },
  logo: {
    height: '100px',
    width: '100px',
  },
  title: {
    marginLeft: '20px',
    fontSize: '2rem',
    color: '#E1354B',
  },
});

export default Header;
