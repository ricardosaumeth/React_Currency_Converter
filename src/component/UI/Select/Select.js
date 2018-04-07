import React from 'react'
import Option from './Option/Option'

const select = (props) => {
  
  const { numberOfOptions }  = props;
  let option = null;

  if ( Array.isArray(numberOfOptions) ) {
    option = numberOfOptions.map((option) => {
      return <Option key={option.$.currency} value={option.$.currency} text={option.$.currency}/>
    })
  }

  return (
    <select>
      {option}
    </select>
  );
}

export default select;