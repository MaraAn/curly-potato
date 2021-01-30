import { useContext } from 'react';
import Context from '../context/Context';

const handleSumTotal = () => {
  const { state } = useContext(Context);
  const { cart } = state;
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
}

export default handleSumTotal;