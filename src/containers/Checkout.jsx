import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../context/Context';
import handleSumTotal from '../utils/sum';

import '../styles/containers/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(Context);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  }

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3> }
        {cart.map((item, i) => (
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>{`$ ${item.price}`}</span>
            </div>
            <button type='button' onClick={handleRemove(item, i)}>
              <i className='fas fa-trash' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;