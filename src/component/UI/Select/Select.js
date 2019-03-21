import React from 'react';
import Option from './Option/Option';

const select = ({ numberOfOptions, currencySelected }) => {
  let options = null;

  if (Array.isArray(numberOfOptions)) {
    options = numberOfOptions.map(option => {
      return (
        <Option
          key={option.$.currency}
          value={option.$.currency}
          text={option.$.currency}
        />
      );
    });
  }

  return <select onChange={currencySelected}>{options}</select>;
};

export default select;
