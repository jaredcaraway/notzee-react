import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="Game-header">
      <img src={logo} className="Game-logo" alt="logo" />
      <h1 className="Game-title">Welcome to React</h1>
    </header>
  );
}

export default Header;