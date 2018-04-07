import React, { Component } from 'react'
import { parseString } from 'xml2js'

import Select from '../component/UI/Select/Select'

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
        this.setState({ currencies: currencies });
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

  render() {
    return (

        <div className="wrapper">

          <h1>Currency Converter</h1>

          <div className="column col-3"> 
            <Select numberOfOptions={this.state.currencies && this.state.currencies}/>
          </div>

          <div className="column col-3">
            <img src="/arrow.png" alt="exchange-arrow"/>
          </div>

          <div className="column col-3">
            <Select numberOfOptions={this.state.currencies && this.state.currencies}/>
          </div>

        </div>   
    );
  }
}

export default App;
