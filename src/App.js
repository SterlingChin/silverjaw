import React, { Component } from 'react';
import styled from '@emotion/styled';
import { COLORS } from './utils/constants'
import { isMobile } from './utils/Browsers';
import Header from './Header/Header';
import SoftwareEngineer from './Engineer/Engineer';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';

const AppContainer = styled('div')`
    background-color: ${COLORS.MAIN_BACKGROUND};
    font-family: 'Source Code Pro', monospace;
`
AppContainer.displayName = 'AppContainer'

const BodyItem = styled('div')`
  display: flex;
  width: ${({isMobile}) => isMobile ? '100vw' :'900px'};
  margin: 0 auto 15px;
  height: auto;
`
BodyItem.displayName = 'BodyItem'


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <BodyItem isMobile={isMobile}>
          <SoftwareEngineer />
        </BodyItem>
        <BodyItem isMobile={isMobile}>
          <About />
        </BodyItem>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
