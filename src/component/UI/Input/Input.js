import React from 'react'

const input = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.changed} 
      placeholder={props.placeholder}
      /* onFocus={props.Focus} *//>   
  );
}

export default input;