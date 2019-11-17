import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from '../utils/Browsers';

const colors = {
    LINK: '#F2501B',
    LINK_HOVER: '#D34317'
}

const messages = [
    'Software Engineer with 3 years experience currently at Workfront',
    'Tech Stack: React w/ Hooks & Redux, Javascript, Amazon AWS, Gitlab pipelines, Styled Components (Emotion)'
];
const links = {
    'Resume': 'https://drive.google.com/file/d/1zzO7s2kteazY5E3R3Xzo_5a8G7E_0--6/view?usp=sharing',
    'DevMountain promo': 'https://www.youtube.com/watch?v=QlaOlvteRec',
    'Christmas Tree (pure HTML/CSS)': 'https://christmastree.now.sh',
};

const AboutContainer = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '1.5em' :'2em'};
    display: inline-block;
    vertical-align: middle;
    align-self: center;
    margin: ${({isMobile}) => isMobile ? '15px auto' :'0 0 100px 0'};
    text-align: left;
`
AboutContainer.displayName = 'AboutContainer';

const SectionTitle = styled('div')`
    font-size: 24px;
    width: 100%;
    margin: ${({isMobile}) => isMobile ? '5px' :'0px'};
`
SectionTitle.displayName = 'SectionTitle';

const Message = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '14px' :'16px'};
    line-height: 18px;
    width: 100%;
    padding: 5px;
    margin: 0 0 5px 0;
    a {
        color: ${colors.LINK};
        text-decoration: none;
        :visited {
            color: ${colors.LINK};
        }
        :hover {
            color: ${colors.LINK_HOVER}
        }
    }
`
Message.displayName = 'Message';

const About = () => (
    <AboutContainer isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>
            About:
        </SectionTitle>
        {messages.map(message => (
            <Message>
                {message}
            </Message>
        ))}
        <SectionTitle isMobile={isMobile}>
            Links:
        </SectionTitle>
        {Object.keys(links).map(key => {
            return (
                <Message key={key}>
                    <a href={links[key]} target='_blank' rel='noopener noreferrer'>
                        {`${key}`}
                    </a>
                </Message>
            )
        })}
    </AboutContainer>
);

export default About;