import React from 'react'
import 
  { CurrencyDescriptionMapper as CurrencyTypes } 
  from '../../../../utils/currencyDescriptionMapper'

const option = (props) => <option value={props.value}>{CurrencyTypes[props.text]}</option>;

export default option;