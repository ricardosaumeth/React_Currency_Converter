import React from 'react';

const input = ({ value, changed, placeholder }) => {
  return <input value={value} onChange={changed} placeholder={placeholder} />;
};

export default input;
