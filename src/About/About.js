import React from 'react';
import { isMobile } from '../utils/Browsers';
import './About.css';

const About = () => {

    const messages = [
        'I am a front end developer at Overstock.com, and a husband and father to 2 amazing boys.',
        'I love Javascript, plain and simple. I try to be framework agnostic, but I lean toward React w/ Redux. When I\'m not coding, I\'m hiking, riding my motorcycle, flying drones, attending Real Salt Lake soccer games, or playing videos games.',
        'At 34 I decided to pivot.  Over the course of a few years, I had gotten to know the dev teams at the companies I worked at, and after talking and working with them, I realized that this is something that I could do.  So, I took the leap.  We sold our house, moved in with my in-laws, and I went back to school at DevMountain in Provo, UT. Going in, I quickly learned that I was in over my head. I struggled. But I wasn\'t going fail. My back was against the wall. I pushed myself. Hard. I spend 16-18 hours a day studying. I needed to prove to myself that I could do it. And I did. I graduated near the top of my class, went on to mentor the next group of students at DevMountain, and eventually landed at Overstock.com.',
        'Now, I firmly believe in paying it forward. I mentor 2 younger developers, and am working on a way to build a solid tech education for lower income areas. I firmly believe that if I could do it, so can many others.',
        'Checkout some of the links below:',
        //'As dictated by my son: Daddy\'s so sweet! And Daddy plays with Taylor and Grayson.  And we play in the sandbox.  And Grayson and Taylor play in the toybox.  And Daddy needs to take me to Lulu\'s House, and soccer games, and school. And Daddy needs to play with me with toys tomorrow.  And play ball with our pet.  And read books. And we want to pick blueberries to make blueberry punch.',
    ]
    const links = {
        'I\'m in the DevMountain promo!': 'https://www.youtube.com/watch?v=QlaOlvteRec',
        'Christmas Tree (pure HTML/CSS)': 'https://christmastree.now.sh',
    }
    if (isMobile) {
        return (
            <div className="about-body-mobile">
                <div className="about-title-mobile">
                    About:
                </div>
                {messages.map(message => {
                    return (
                        <div className="about-message">
                            {message}
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="about-body">
            <div className="about-title-mobile">
                About:
            </div>
            {messages.map(message => {
                return (
                    <div className="about-message">
                        {message}
                    </div>
                )
            })}
            {Object.keys(links).map(key => {
                return (
                    <div key={key}>
                        <a href={links[key]} target='_blank' rel='noopener noreferrer'>
                            {`${key}`}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

export default About;