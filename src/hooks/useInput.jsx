import React from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const changeValue = React.useCallback( 
      (e) => { 
          e.target? setValue(e.target.value): setValue(e);
      }
  , [setValue])
  return {value, changeValue}
}