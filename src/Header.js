import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/lets-talk">Let's Talk</Link>
      </nav>
    </header>
  );
}

export default Header;
