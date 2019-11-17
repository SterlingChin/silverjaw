import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from '../utils/Browsers';

const EngineerContainer = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '1.5em' :'2em'};
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    align-self: center;
    margin: ${({isMobile}) => isMobile ? '15px auto' :'0 0 100px 0'};
`
EngineerContainer.displayName = 'EngineerContainer'


const SoftwareEngineer = () => (
    <EngineerContainer isMobile={isMobile}>
        Software Engineer
    </EngineerContainer>
);

export default SoftwareEngineer;