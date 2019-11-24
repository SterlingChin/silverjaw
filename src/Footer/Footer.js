import React from 'react';
import styled from '@emotion/styled'
import { COLORS, CONTAINERS } from '../utils/constants'
import { isMobile } from '../utils/Browsers'

const { FOOTER } = CONTAINERS;

const FooterContainer = styled('div')`
    background-color: ${COLORS.HEADER_FOOTER_BACKGROUND};
    height: ${(isMobile) => isMobile ? FOOTER.MOBILE : FOOTER.DESKTOP};
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    line-height: 50px;
`
FooterContainer.displayName = 'FooterContainer'


const Footer = () => {
    return (
        <FooterContainer isMobile={isMobile}>
            Copyright 2019
        </FooterContainer>
    )
};

export default Footer;