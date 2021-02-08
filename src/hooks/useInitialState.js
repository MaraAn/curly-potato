import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addToCart = payload => {
    setState ({
      ...state,
      cart: [ ...state.cart, payload ],
    });
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
    });
  };

  return {
    addNewOrder,
    addToBuyer,
    addToCart,
    removeFromCart,
    state,
  };
}

export default useInitialState;