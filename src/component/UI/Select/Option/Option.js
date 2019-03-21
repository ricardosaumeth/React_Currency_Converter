import React from 'react';
import { CurrencyDescriptionMapper as CurrencyTypes } from '../../../../utils/currencyDescriptionMapper';

const option = ({ value, text }) => (
  <option value={value}>{CurrencyTypes[text]}</option>
);

export default option;
