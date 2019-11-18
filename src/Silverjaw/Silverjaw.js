import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from '../utils/Browsers';

const SJLogo = styled('img')`
    height: ${({isMobile}) => isMobile ? '150px' :'350px'};
    margin: 25px;
`
SJLogo.displayName = 'SJLogo'


const Silverjaw = () => (
    <SJLogo isMobile={isMobile} src={require('../Images/silverjaw.png')} alt='silverjaw logo'/>
);

export default Silverjaw;