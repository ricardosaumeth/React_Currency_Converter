/**
 * We need to specified if the conversion is from the first currency
 * to the second or viceversa. e.g. From the left currency to right currency pannel
 */

const ExchangeConversionType = { First: 1, Second: 2 };

function exchangeConverter(exchangeType, currencyQuantity, firstCurrencyRate, secondCurrencyRate) {
  
  const number = currencyQuantity || 1;
  let EurosToFirstCurrency = 0;
  let EurosToSecondCurrency = 0;

  if(exchangeType === ExchangeConversionType.First) {
    EurosToFirstCurrency = number / firstCurrencyRate;
    EurosToSecondCurrency = secondCurrencyRate; 
  }
  else {
    EurosToFirstCurrency = firstCurrencyRate;
    EurosToSecondCurrency = number / secondCurrencyRate;
  }

  return EurosToFirstCurrency * EurosToSecondCurrency; 
}

export { ExchangeConversionType, exchangeConverter } 