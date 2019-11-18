import React from 'react';
import styled from '@emotion/styled'

const FooterContainer = styled('div')`
    height: 50px;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
`
FooterContainer.displayName = 'FooterContainer'


const Footer = () => {
    return (
        <FooterContainer className="footer-body">
            Copyright 2019.
        </FooterContainer>
    )
};

export default Footer;