import React, { Component } from 'react';
import styled from '@emotion/styled';
import { COLORS, CONTAINERS } from './utils/constants'
import { isMobile } from './utils/Browsers';
import Header from './Header/Header';
import SoftwareEngineer from './Engineer/Engineer';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';

const { MAIN_BACKGROUND } = COLORS;
const { BODY } = CONTAINERS

const AppContainer = styled('div')`
    background-color: ${MAIN_BACKGROUND};
    height: 100vh;
    width: 100vw;
    font-family: 'Source Code Pro', monospace;
`
AppContainer.displayName = 'AppContainer'

const BodyContainer = styled('div')`
    height: ${({isMobile}) => isMobile ? BODY.MOBILE : BODY.DESKTOP };
    overflow: scroll;
`
BodyContainer.displayName = 'BodyContainer'


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
        <BodyContainer>
          <BodyItem isMobile={isMobile}>
            <SoftwareEngineer />
          </BodyItem>
          <BodyItem isMobile={isMobile}>
            <About />
          </BodyItem>
        </BodyContainer>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
