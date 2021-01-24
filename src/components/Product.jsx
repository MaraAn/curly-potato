import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className='Products-item'>
      <img
        alt={product.title}
        className='Products-item-image'
        src={product.image}
      />
      <div className='Products-item-info'>
        <h2>
          {product.title}
          <span>
            {' '}
            $
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button
        classsName='Products-item-add'
        onClick={handleAddToCart(product)}
        type='button'
      >
        <i className='fas fa-plus' />
      </button>
    </div>
  );
}

export default Product;