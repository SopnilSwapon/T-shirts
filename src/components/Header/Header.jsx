// import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className='header'>
        <Link to='/'>Home</Link>
        <Link to='/order'>Order-Review</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    );
};

export default Header;