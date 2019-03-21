import React, { Component } from 'react'
import { parseString } from 'xml2js'

import Select from '../component/UI/Select/Select'
import Input from '../component/UI/Input/Input'

import { loopNestedObj } from '../utils/formatXML-utils';
import { ExchangeConversionType, exchangeConverter } from '../utils/exchangeConverter-utils'
import './App.css'

class App extends Component {

  state = {
    currencies: [],
    firstCurrencySymbol: null,
    firstCurrencyRate: null,
    secondCurrencySymbol: null,
    secondCurrencyRate: null,

    firstCurrencyQuantity: '',
    secondCurrencyQuantity: ''
  }

  _formatXML (data) {
    parseString(data, (err, result) => {
      try {
        const currencies = loopNestedObj(result);
        const defaultCurrency = currencies[0].$.currency;
        const defaultCurrencyRate = currencies[0].$.rate;

        this.setState({ 
          currencies: currencies,
          firstCurrencySymbol: defaultCurrency,
          firstCurrencyRate: defaultCurrencyRate,
          secondCurrencySymbol: defaultCurrency,
          secondCurrencyRate: defaultCurrencyRate
        });
      }
      catch (error) {
        console.log(error);
      }   
    });  
  }

  componentDidMount() {
    const url = 'http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
    fetch(url)
      .then((response) => {
        return response.text(); 
      })
      .then((data) => {
        this._formatXML(data);
      })
      .catch((error) => console.log(error) );
  }

  _setCurrency = (ev, exchangeRateType) => {
    const currencySymbol = ev.target.value;
    const currencySelected = this.state.currencies.find((curr) => {
      return (curr.$.currency === currencySymbol) && curr;
    });

    if(exchangeRateType === ExchangeConversionType.First) {
      this.setState({
        firstCurrencySymbol: currencySymbol,
        firstCurrencyRate: currencySelected.$.rate
      });
    } else {
      this.setState({
        secondCurrencySymbol: currencySymbol,
        secondCurrencyRate: currencySelected.$.rate
      });
    }

  }

  _getCurrencyRate = (ev, exchangeRateType) => {
    ev.preventDefault();

    let quantity = undefined;

    if(exchangeRateType === ExchangeConversionType.First) {
      quantity = this._getExchangeConverter(ev, ExchangeConversionType.First);
      this.setState({
        firstCurrencyQuantity: +ev.target.value,
        secondCurrencyQuantity: quantity
      });
    } else {
      quantity = this._getExchangeConverter(ev, ExchangeConversionType.Second);
      this.setState({
        secondCurrencyQuantity: +ev.target.value,
        firstCurrencyQuantity: quantity
      });
    }

  }

  _getExchangeConverter = (ev, exchangeRateType) => {
    /* We only allow the user to type numbers */
    if ((typeof ev.target.value === 'string') && (ev.target.value !== "")) {
      return exchangeConverter(exchangeRateType, +ev.target.value, this.state.firstCurrencyRate, this.state.secondCurrencyRate);
    }
  }

  _getExchangeRate = exchangeRateType => {
    return parseFloat(
        exchangeConverter(
            exchangeRateType, null, this.state.firstCurrencyRate, this.state.secondCurrencyRate
        ))
        .toFixed(8);
  }

  render() {
    const {
      firstCurrencySymbol,
      secondCurrencySymbol,
      firstCurrencyQuantity,
      secondCurrencyQuantity,
      currencies
    } = this.state;
    
    const exchangeRateA = this._getExchangeRate(ExchangeConversionType.First);
    const exchangeRateB = this._getExchangeRate(ExchangeConversionType.Second);

    return (

        <div className="wrapper">

          <h1>Currency Converter</h1>

          <div className="column col-3"> 

          <h3>{`1 ${firstCurrencySymbol} = ${exchangeRateA} ${secondCurrencySymbol}`}</h3>
            
            <Select 
              numberOfOptions={currencies && currencies}
              currencySelected={(ev) => this._setCurrency(ev, ExchangeConversionType.First)}/>
            
            <Input 
              value={firstCurrencyQuantity ? parseFloat(firstCurrencyQuantity).toFixed(0) : ''}
              changed={ev => this._getExchangeRate(ev, ExchangeConversionType.First)}
              placeholder={'Type a quantity to calculate'}
              /> 
            
          </div>

          <div className="column col-3">
            <img src="/arrow.png" alt="exchange-arrow"/>
          </div>

          <div className="column col-3">
          <h3>{`1 ${secondCurrencySymbol} = ${exchangeRateB} ${firstCurrencySymbol}`}</h3>
            
            <Select 
              numberOfOptions={currencies && currencies}
              currencySelected={(ev) => this._setCurrency(ev, ExchangeConversionType.Second)}/>

            <Input 
              value={secondCurrencyQuantity ? parseFloat(secondCurrencyQuantity).toFixed(0) : ''}
              changed={ev => this._getCurrencyRate(ev, ExchangeConversionType.Second)}
              placeholder={'Type a quantity to calculate'}/>

          </div>

        </div>   
    );
  }
}

export default App;
