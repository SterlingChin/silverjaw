import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../utils/constants'
import { isMobile } from '../utils/Browsers';

const messages = [
    'Software Engineer with 3 years experience currently at Workfront',
    'Tech Stack: React w/ Hooks & Redux, Javascript, Jest & Enzyme, Amazon AWS, Gitlab pipelines, and styled components (Emotion)',
    'Professional Goals: Mentor new engineers, write clean & testable code (I strive for 100% test coverage), and continue to level up my craft',
    'Professional Interests: TDD (Test Driven Developement), React.js, Vue.js, pixel match mocks, and speaking at conferences',
    'Interests: Snowboarding, Hiking, Motorcycles, Tattoos, Space, Mechanical Keyboards, and of course my amazing family'
];
const links = {
    'Resume': 'https://drive.google.com/file/d/1zzO7s2kteazY5E3R3Xzo_5a8G7E_0--6/view?usp=sharing',
    'Shakespear Review': 'https://sterling-chin-podium-challenge-home.now.sh/',
    'DevMountain promo': 'https://www.youtube.com/watch?v=QlaOlvteRec',
    'Christmas Tree (pure HTML/CSS)': 'https://christmastree.now.sh',
};

const AboutContainer = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '1.5em' :'2em'};
    display: inline-block;
    vertical-align: middle;
    align-self: center;
    margin: ${({isMobile}) => isMobile ? '15px auto' :'0px'};
    text-align: left;
`
AboutContainer.displayName = 'AboutContainer';

const SectionTitle = styled('div')`
    font-size: 24px;
    width: 100%;
    margin: ${({isMobile}) => isMobile ? '5px' :'0px'};
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
`
SectionTitle.displayName = 'SectionTitle';

const Message = styled('div')`
    font-size: ${({isMobile}) => isMobile ? '14px' :'16px'};
    line-height: 18px;
    width: 100%;
    padding: 5px;
    margin: 0 0 8px 0;
    filter: drop-shadow(0 1px 2px rgba(0, 35, 64, 0.32));
    a {
        color: ${COLORS.LINK};
        text-decoration: none;
        :visited {
            color: ${COLORS.LINK};
        }
        :hover {
            color: ${COLORS.LINK_HOVER}
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