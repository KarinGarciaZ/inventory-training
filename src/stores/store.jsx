import React, { useReducer } from 'react';

export const ProductsContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        products: [ ...state.products, action.payload ]
      }
    case 'remove':
      const productsCopy = [ ...state.products ];
      const indexToRemove = productsCopy.findIndex( product => product.id === action.payload );
      productsCopy.splice(indexToRemove, 1);

      return { ...state, products: productsCopy };
    case 'edit':
      const allProductsCopy = [ ...state.products ];
      const indexToRdit = allProductsCopy.findIndex( product => product.id === action.payload.id );
      allProductsCopy[indexToRdit] = action.payload;

      return { ...state, products: allProductsCopy };
    case 'find':
      const productsCopies = [ ...state.products ];
      const productToFind = productsCopies.find( product => product.id === action.payload );

      return { ...state, selectedProduct: productToFind };
    default:
      throw new Error();
  }
}

export const Provider = props => {
  const initialState = {
    products: [],
    selectedProduct: null
  };
  
  const productsContextValue = useReducer( reducer, initialState )

  return (
    <ProductsContext.Provider value={productsContextValue}>
      { props.children }
    </ProductsContext.Provider>
  )
}