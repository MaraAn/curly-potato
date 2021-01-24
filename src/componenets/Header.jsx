import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';


const Header = () => {
  return (
    <div className='Header'>
      <Link to='/'>
        <h1 className='Header-title'>Cruly Potato</h1>
      </Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className="fas fa-shopping-cart"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
