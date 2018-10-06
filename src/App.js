import React, { Component } from 'react';
import { isMobile } from './utils/Browsers';
import Header from './Header/Header';
import Silverjaw from './Silverjaw/Silverjaw';
import IAmFed from './IAmFed/IAmFed';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    if (isMobile) {
      return (
        <div className="App">
            <Header />
            <IAmFed />
            <Silverjaw />
            <About />
            <Footer />
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
        <div className='body'>
          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
