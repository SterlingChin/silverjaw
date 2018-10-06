import React from 'react';
import { TwitterSvg } from '../Images/TwitterSvg';
import { GithubSvg } from '../Images/GithubSvg';
import { LinkedInSvg } from '../Images/LinkedInSvg';
import { EmailSvg } from '../Images/EmailSvg';
import { isMobile } from '../utils/Browsers';
import './Header.css';

const Header = () => {
    if (isMobile) {
        return (
            <div className="header-body-mobile">
                <span className="title-mobile">Sterling Chin</span>
                <div className="social-mobile" >
                    <a
                        href='https://twitter.com/SilverJaw82'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <TwitterSvg />
                    </a>
                    <a
                        href='https://github.com/SterlingChin'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <GithubSvg />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/sterlingchin/'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <LinkedInSvg />
                    </a>
                    <a
                        href='mailto:sterling.chin@gmail.com'
                    >
                        <EmailSvg />
                    </a>
                </div>
            </div>
        )
    }
    return (
        <div className="header-body">
            <span className="title">Sterling Chin</span>
            <div className="social" >
                <a
                    href='https://twitter.com/SilverJaw82'
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <TwitterSvg />
                </a>
                <a
                    href='https://github.com/SterlingChin'
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubSvg />
                </a>
                <a
                    href='https://www.linkedin.com/in/sterlingchin/'
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedInSvg />
                </a>
                <a
                    href='mailto:sterling.chin@gmail.com'
                >
                    <EmailSvg />
                </a>
            </div>
        </div>
    )
};

export default Header;