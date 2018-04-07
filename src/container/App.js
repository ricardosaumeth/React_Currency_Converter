import React, { Component } from 'react'
import { parseString } from 'xml2js'
import { getCurrencies } from '../api'

import './App.css'


class App extends Component {

  state = {
    currencies: { }
  }

  loopNestedObj = (obj) => {
    var gesmes = obj["gesmes:Envelope"];
    var outterCubeArray = gesmes.Cube;
    var outterCubes = outterCubeArray[0];
    var innerCubes = outterCubes.Cube;
    var innerCubesArray = innerCubes[0];
    var Cubes = innerCubesArray.Cube;
    Cubes.map(cube => console.log(cube.$.currency));
  }


  toJSON (data) {
    parseString(data, (err, result) => {
      this.loopNestedObj(result); 
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
