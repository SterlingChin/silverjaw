import React from 'react';
import { isMobile } from '../utils/Browsers';
import './Silverjaw.css';

const Silverjaw = () => {
    if (isMobile) {
        return (
            <img src={require('../Images/silverjaw.png')} alt='silverjaw logo' className="logo-mobile" />
        )
    }
    return (
        <img src={require('../Images/silverjaw.png')} alt='silverjaw logo' className="logo" />
    )
};

export default Silverjaw;