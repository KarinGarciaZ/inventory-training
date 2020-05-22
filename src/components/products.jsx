import React, { useContext, useCallback } from 'react';
import { ProductsContext } from '../stores/store';
import Product from './product';

const Products = () => {
  const [ state, dispatch ] = useContext(ProductsContext);

  const deleteProduct = useCallback( id => {
    dispatch({type: 'remove', payload: id});
  }, []);

  const sendToEditProduct = useCallback( id => {
    dispatch({type: 'find', payload: id});
  }, []);

  const productsElements = state.products.map( product => {
    return <Product 
      key={product.id} 
      id={product.id}
      name={product.name} 
      price={product.price} 
      brand={product.brand}
      sendToEditProduct={sendToEditProduct}
      deleteProduct={deleteProduct}/>
  })

  return (
    <div className="product-container">{productsElements}</div>
  )
}

export default Products;