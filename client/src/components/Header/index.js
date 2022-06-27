import React from 'react';
import './header.scss';
import anchor from './anchor-32.png';

const Header = () => {
  return (
    <header className='header'>
    <h1>
      <img src={anchor} alt="" />
      Les Argonautes
    </h1>
  </header>
  );
};

export default Header;