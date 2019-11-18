import React from 'react';
import styled from '@emotion/styled';
import Silverjaw from '../Silverjaw/Silverjaw';
import { isMobile } from '../utils/Browsers';

const EngineerContainer = styled('div')`
    display: flex;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
EngineerContainer.displayName = 'EngineerContainer'

const Title = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '1.5em' :'2em'};
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    line-height: 50px;
    align-self: center;
    margin: ${({isMobile}) => isMobile ? '15px auto' :'0 0 100px 0'};
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
Title.displayName = 'Title'



const SoftwareEngineer = () => (
    <EngineerContainer isMobile={isMobile}>
        <Silverjaw />
        <Title>Software Engineer</Title>
    </EngineerContainer>
);

export default SoftwareEngineer;