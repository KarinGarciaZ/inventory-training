import React from 'react';

const Input = ({value, handleChange, placeholder}) => {
  return (
    <input 
      type='text' 
      className='input'
      placeholder={placeholder} 
      value={value} 
      onChange={handleChange} />
  )
}

export default Input;