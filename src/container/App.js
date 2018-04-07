import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="wrapper">

          <h1>Currency Converter</h1>

          <div className="column col-3"> 
            <select>
              <option value="euro">United States Dollar</option>
              <option value="USDollars">USD</option>
              <option value="Jenes">JPY</option>
              <option value="Niidea">BGN</option>
            </select>
          </div>

          <div className="column col-3">
            <img src="/arrow.png" alt="exchange-arrow"/>
          </div>

          <div className="column col-3">
            <select>
              <option value="euro">United States Dollar</option>
              <option value="USDollars">USD</option>
              <option value="Jenes">JPY</option>
              <option value="Niidea">BGN</option>
            </select>
          </div>

        </div>   
    );
  }
}

export default App;
