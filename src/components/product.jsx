import React, { memo } from 'react';

const Product = memo(({id, name, brand, price, deleteProduct, sendToEditProduct}) => {

  return (
    <div className='product-item'>
      <span>{name}</span>
      <span>{brand}</span>
      <span>{price}</span>
      <span onClick={sendToEditProduct.bind(this, id)}>Edit</span>
      <span className='product-remove' onClick={deleteProduct.bind(this, id)}>X</span>
    </div>
  )
});

export default Product;