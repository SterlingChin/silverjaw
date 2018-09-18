import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Silverjaw from './Silverjaw/Silverjaw';
import IAmFed from './IAmFed/IAmFed';
import { isMobile } from './utils/Browsers';

class App extends Component {
  render() {
    console.log(isMobile);
    if (isMobile) {
      return (
        <div className="App">
            <Header />
            <IAmFed />
            <Silverjaw />
        </div>
      )
    }
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
