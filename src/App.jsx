import React, {Component} from 'react'
import {getDailyWeatherByCountry} from './api'
import './App.css';

class App extends Component {
  render(){
    return (
    <div className="App">
    </div>
    );
  }

  componentDidMount(city, country){
    getDailyWeatherByCountry('Kaunas', 'Lithuania')
  }
}

export default App;
