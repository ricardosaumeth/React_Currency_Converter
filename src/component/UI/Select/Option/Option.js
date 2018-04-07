import React from 'react'
import {CurrencyDescriptionMapper as CurrencyTypes}from '../../../../utils/currencyDescriptionMapper'

// const option = (props) => <option value={CurrencyTypes[props.value]}>{CurrencyTypes[props.text]}</option>;

const option = (props) => {

  return (
    <option value={CurrencyTypes[props.value]}>{CurrencyTypes[props.text]}</option>
  );
};

export default option;