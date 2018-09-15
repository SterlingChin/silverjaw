import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Silverjaw from './Silverjaw/Silverjaw';
import IAmFed from './IAmFed/IAmFed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='body'>
          <Silverjaw />
          <IAmFed />
        </div>
      </div>
    );
  }
}

export default App;
