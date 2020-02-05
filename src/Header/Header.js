import React from 'react';
import styled from '@emotion/styled'
import { COLORS, CONTAINERS, SOCIAL_LINKS } from '../utils/constants'
import { TwitterSvg } from '../Images/TwitterSvg';
import { GithubSvg } from '../Images/GithubSvg';
import { LinkedInSvg } from '../Images/LinkedInSvg';
import { EmailSvg } from '../Images/EmailSvg';
import { isMobile } from '../utils/Browsers';

const { HEADER } = CONTAINERS

const HeaderContainer = styled('div')`
    height: ${({isMobile}) => isMobile ? HEADER.MOBILE : HEADER.DESKTOP};
    width: 100%;
    display: ${({isMobile}) => isMobile ? 'block' :'flex'};
    justify-content: ${({isMobile}) => isMobile ? 'flex-start' :'space-between'};
    background-color: ${COLORS.HEADER_FOOTER_BACKGROUND};
`
HeaderContainer.displayName = 'HeaderContainer'

const Title = styled('span')`
    font-size: 35px;
    line-height: ${({isMobile}) => isMobile ? '50px' :'75px'};
    margin: ${({isMobile}) => isMobile ? 'auto' :'0 0 0 15px'};
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
Title.displayName = 'Title'

const ResumeIcon = styled('a')`
    svg {
        height: 43px;
        margin: 0 14px 18px 0;
    }
`
ResumeIcon.displayName = 'ResumeIcon'

const SocialLinks = styled('div')`
    display: ${({isMobile}) => isMobile ? 'flex' : 'block' };
    justify-content: center;
    svg {
    height: ${({isMobile}) => isMobile ? '36px' : '50px' };
    margin: 15px;
    fill: #000000;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
    }
`
SocialLinks.displayName = 'SocialLinks'

const getIcon = name => {
    switch (name) {
        case 'TWITTER':
            return <TwitterSvg />;
        case 'GITHUB':
            return <GithubSvg />;
        case 'LINKED_IN':
            return <LinkedInSvg />;
        default:
            return <EmailSvg />
    }
}

const Header = () => {
    return (
        <HeaderContainer isMobile={isMobile}>
            <Title mobile={isMobile}>Sterling Chin</Title>
            <SocialLinks isMobile={isMobile}>
                {Object.keys(SOCIAL_LINKS).map(link =>
                    <a
                        href={SOCIAL_LINKS[link]}
                        rel="noopener noreferrer"
                        target="_blank"
                    >{getIcon(link)}</a>
                )}
            </SocialLinks>
        </HeaderContainer>
    )
};

export default Header;