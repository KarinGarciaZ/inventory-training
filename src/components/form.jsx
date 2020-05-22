import React, { useContext, useEffect, useState } from 'react';
import {ProductsContext} from '../stores/store';
import { useInput } from '../hooks/useInput';
import Input from './input';

const Form = () => {
  const [ state, dispatch ] = useContext(ProductsContext);
  const [isEdit, setIsEdit] = useState(false);
  const name = useInput('');
  const price = useInput('');
  const brand = useInput('');

  useEffect(() => {
    if ( state.selectedProduct ) {
      name.changeValue(state.selectedProduct.name);
      price.changeValue(state.selectedProduct.price);
      brand.changeValue(state.selectedProduct.brand);
      setIsEdit(true);
    }
  }, [state.selectedProduct]);

  const saveProduct = e => {
    e.preventDefault();
    if( name.value, price.value, brand.value ) {
      const productToSave = {
        id: new Date().getUTCMilliseconds(), 
        name: name.value,
        price: price.value,
        brand: brand.value
      }

      if (isEdit) {
        productToSave.id = state.selectedProduct.id;
        dispatch({type: 'edit', payload: productToSave});
      } else {
        dispatch({type: 'add', payload: productToSave});
      }

      clearForm();
    }
  }

  const clearForm = () => {
    name.changeValue('');
    price.changeValue('');
    brand.changeValue('');
    setIsEdit(false);
  }

  return (
    <form onSubmit={saveProduct} className="form">
      <h2 className='form-title'>{isEdit? 'Edit':'Create'} a Product</h2>
      <Input value={name.value} handleChange={name.changeValue} placeholder='name' />
      <Input value={price.value} handleChange={price.changeValue} placeholder='price' />
      <Input value={brand.value} handleChange={brand.changeValue} placeholder='brand' />
      <div className="buttons">
        <button 
          className="btn btn-clear" 
          onClick={clearForm.bind(this)} 
          type="button"
          >
            Cancel
          </button>
        <button className="btn">Save</button>
      </div>
    </form>
  )
}

export default Form;