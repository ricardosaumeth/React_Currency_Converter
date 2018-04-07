import React, { Component } from 'react'
import { parseString } from 'xml2js'

import Select from '../component/UI/Select/Select'
import Input from '../component/UI/Input/Input'

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

  loopNestedObj = (obj) => {
    var gesmes = obj["gesmes:Envelope"];
    var outterCubeArray = gesmes.Cube;
    var outterCubes = outterCubeArray[0];
    var innerCubes = outterCubes.Cube;
    var innerCubesArray = innerCubes[0];
    var Cubes = innerCubesArray.Cube;
    // Cubes.map(cube => {
    //   console.log(cube.$.currency);
    //   console.log(cube.$.rate);  
    // });
    return Cubes;
  }


  toJSON (data) {
    parseString(data, (err, result) => {
      try {
        const currencies = this.loopNestedObj(result);
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
        this.toJSON(data);
      })
      .catch((error) => console.log(error) );
  }

  fisrtCurrencySelectedHandler = (ev) => {
    const currencySymbol = ev.target.value;
    const currencySelected = this.state.currencies.find((curr) => {
      return (curr.$.currency === currencySymbol) && curr;
    });

    this.setState({ 
      firstCurrencySymbol: currencySymbol,
      firstCurrencyRate: currencySelected.$.rate
    });
  }

  secondCurrencySelectedHandler = (ev) => {
    const currencySymbol = ev.target.value;
    const currencySelected = this.state.currencies.find((curr) => {
      return (curr.$.currency === currencySymbol) && curr;
    });

    this.setState({ 
      secondCurrencySymbol: currencySymbol,
      secondCurrencyRate: currencySelected.$.rate
    });
  }

  firstCurrencyRateHandler = (ev) => {
    ev.preventDefault();
    
    let quantity = undefined;
    /* We only allow the user to type numbers */
    if ((typeof ev.target.value === 'string') && (ev.target.value !== "")) {
      quantity = parseFloat(ev.target.value) * parseFloat(this.state.secondCurrencyRate);
    }

    this.setState({ 
      firstCurrencyQuantity: +ev.target.value,
      secondCurrencyQuantity: quantity
    });
  }

  secondCurrencyRateHandler = (ev) => {
    ev.preventDefault();
    
    let quantity = undefined;
    /* We only allow the user to type numbers */
    if ((typeof ev.target.value === 'string') && (ev.target.value !== "")) {
      quantity = parseFloat(ev.target.value) / parseFloat(this.state.firstCurrencyRate);
    }

    this.setState({ 
      firstCurrencyQuantity: +ev.target.value,
      secondCurrencyQuantity: quantity
    });
  }

  render() {

    
    return (

        <div className="wrapper">

          <h1>Currency Converter</h1>

          <div className="column col-3"> 
          <h3>{`1 ${this.state.firstCurrencySymbol} = ${this.state.secondCurrencyRate} ${this.state.secondCurrencySymbol}`}</h3>
            
            <Select 
              numberOfOptions={this.state.currencies && this.state.currencies} 
              currencySelected={(ev) => this.fisrtCurrencySelectedHandler(ev)}/>
            
            <Input 
              value={this.state.firstCurrencyQuantity ? parseFloat(this.state.firstCurrencyQuantity).toFixed(0) : ''} 
              changed={this.firstCurrencyRateHandler}
              placeholder={'Type a quantity to calculate'}
              /> 
            
          </div>

          <div className="column col-3">
            <img src="/arrow.png" alt="exchange-arrow"/>
          </div>

          <div className="column col-3">
          <h3>{`1 ${this.state.secondCurrencySymbol} = ${this.state.firstCurrencyRate} ${this.state.firstCurrencySymbol}`}</h3>
            
            <Select 
              numberOfOptions={this.state.currencies && this.state.currencies}
              currencySelected={(ev) => this.secondCurrencySelectedHandler(ev)}/>

            <Input 
              value={this.state.secondCurrencyQuantity ? parseFloat(this.state.secondCurrencyQuantity).toFixed(0) : ''}
              changed={this.secondCurrencyRateHandler}
              placeholder={'Type a quantity to calculate'}
              />

          </div>

        </div>   
    );
  }
}

export default App;
