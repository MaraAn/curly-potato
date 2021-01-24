import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../context/Context';

import '../styles/components/Header.css';


const Header = () => {
  const { state } = useContext(Context);
  const { cart } = state;

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>E-commerce</Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-cart' />
        </Link>
        { cart.length > 0 && <div className='Header-alert'>{ cart.length }</div> }
      </div>
    </div>
  );
}

export default Header;
