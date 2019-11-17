import React from 'react';
import styled from '@emotion/styled'
import { TwitterSvg } from '../Images/TwitterSvg';
import { GithubSvg } from '../Images/GithubSvg';
import { LinkedInSvg } from '../Images/LinkedInSvg';
import { EmailSvg } from '../Images/EmailSvg';
import { isMobile } from '../utils/Browsers';

const socialLinks = {
    twitter: 'https://twitter.com/SilverJaw82',
    github: 'https://github.com/SterlingChin',
    linkedIn: 'https://www.linkedin.com/in/sterlingchin/',
    email: 'mailto:sterling.chin@gmail.com',
}

const HeaderContainer = styled('div')`
    height: ${({isMobile}) => isMobile ? '150px' :'75px'};
    width: 100%;
    display: flex;
    justify-content: ${({isMobile}) => isMobile ? 'flex-start' :'space-between'};
`
HeaderContainer.displayName = 'HeaderContainer'

const Title = styled('span')`
    font-size: 35px;
    line-height: ${({isMobile}) => isMobile ? '50px' :'75px'};
    margin: ${({isMobile}) => isMobile ? 'auto' :'0 0 0 15px'};
`
Title.displayName = 'Title'

const SocialLinks = styled('div')`
    svg {
    height: 50px;
    margin: 15px;
    fill: #000000;
}
`
SocialLinks.displayName = 'SocialLinks'



const Header = () => {
    return (
        <HeaderContainer isMobile={isMobile}>
            <Title mobile={isMobile}>Sterling Chin</Title>
            <SocialLinks className="social" >
                <a
                    href={socialLinks.twitter}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <TwitterSvg />
                </a>
                <a
                    href={socialLinks.github}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubSvg />
                </a>
                <a
                    href={socialLinks.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedInSvg />
                </a>
                <a
                    href={socialLinks.email}
                >
                    <EmailSvg />
                </a>
            </SocialLinks>
        </HeaderContainer>
    )
};

export default Header;