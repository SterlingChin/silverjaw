import React from 'react';
import styled from '@emotion/styled'
import { Resume } from '../Images/Resume';
import { TwitterSvg } from '../Images/TwitterSvg';
import { GithubSvg } from '../Images/GithubSvg';
import { LinkedInSvg } from '../Images/LinkedInSvg';
import { EmailSvg } from '../Images/EmailSvg';
import { isMobile } from '../utils/Browsers';

const socialLinks = {
    resume: 'https://drive.google.com/file/d/1zzO7s2kteazY5E3R3Xzo_5a8G7E_0--6/view',
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
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
Title.displayName = 'Title'

const SocialLinks = styled('div')`
    svg {
    height: 50px;
    margin: 15px;
    fill: #000000;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
    }
`
SocialLinks.displayName = 'SocialLinks'

const ResumeIcon = styled('a')`
    svg {
        height: 43px;
        margin: 0 14px 18px 0;
    }
`
ResumeIcon.displayName = 'ResumeIcon'


const Header = () => {
    return (
        <HeaderContainer isMobile={isMobile}>
            <Title mobile={isMobile}>Sterling Chin</Title>
            <SocialLinks className="social" >
                <ResumeIcon
                    href={socialLinks.resume}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Resume />
                </ResumeIcon>
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