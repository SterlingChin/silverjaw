import React from 'react';
import styled from '@emotion/styled';
import Silverjaw from '../Silverjaw/Silverjaw';
import { isMobile } from '../utils/Browsers';

const EngineerContainer = styled('div')`
    display: ${({isMobile}) => isMobile ? 'block' :'flex'};
    height: 350px;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
EngineerContainer.displayName = 'EngineerContainer'

const SilverjawContainer = styled('div')`
    width: 350px;
`
SilverjawContainer.displayName = 'SilverjawContainer'

const Title = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '1.5em' :'2em'};
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    line-height: 50px;
    align-self: center;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
Title.displayName = 'Title'

const SoftwareEngineer = () => (
    <EngineerContainer isMobile={isMobile}>
        <SilverjawContainer isMobile={isMobile}>
            <Silverjaw />
        </SilverjawContainer>
        <Title>Software Engineer</Title>
    </EngineerContainer>
);

export default SoftwareEngineer;