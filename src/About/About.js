import React from 'react';
import { isMobile } from '../utils/Browsers';
import './About.css';

const About = () => {

    const message = {
        line1: 'I am a front end developer at Overstock.com, and a husband and father to 2 amazing boys.',
        line2: 'I love Javascript, plain and simple. I try to be framework agnostic, but I lean toward React w/ Redux. When I\'m not coding, I\'m hiking, riding my motorcycle, flying drones, attending Real Salt Lake soccer games, or playing videos games.',
        line3: 'As dictated by my son: Daddy\'s so sweet! And Daddy plays with Taylor and Grayson.  And we play in the sandbox.  And Grayson and Taylor play in the toybox.  And Daddy needs to take me to Lulu\'s House, and soccer games, and school. And Daddy needs to play with me with toys tomorrow.  And play ball with our pet.  And read books. And we want to pick blueberries to make blueberry punch.',
    }
    if (isMobile) {
        return (
            <div className="about-body-mobile">
                <div className="about-title-mobile">
                    About:
                </div>
                <div className="about-message">
                    {message.line1}
                </div>
                <div className="about-message">
                    {message.line2}
                </div>
                <div className="about-message">
                    {message.line3}
                </div>
                <div className="about-message">
                    {message.line4}
                </div>
            </div>
        )
    }
    return (
        <div className="about-body">
            <div className="about-title">
                About:
            </div>
            <div className="about-message">
                {message.line1}
            </div>
            <div className="about-message">
                {message.line2}
            </div>
            <div className="about-message">
                {message.line3}
            </div>
        </div>
    )
};

export default About;