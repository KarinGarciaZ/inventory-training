import React, { memo } from 'react';

const Input = memo(({value, handleChange, placeholder}) => {

  return (
    <input 
      type='text' 
      className='input'
      placeholder={placeholder} 
      value={value} 
      onChange={handleChange} />
  )
})

export default Input;