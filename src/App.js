import React, { Component } from 'react';
import styled from '@emotion/styled';
import { COLORS } from './utils/constants'
import { isMobile } from './utils/Browsers';
import Header from './Header/Header';
import Silverjaw from './Silverjaw/Silverjaw';
import SoftwareEngineer from './Engineer/Engineer';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';

const AppContainer = styled('div')`
    background-color: ${COLORS.MAIN_BACKGROUND};
`
AppContainer.displayName = 'AppContainer'


class App extends Component {
  render() {
    if (isMobile) {
      return (
        <div className="App">
            <Header />
            <SoftwareEngineer />
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
          <SoftwareEngineer />
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
