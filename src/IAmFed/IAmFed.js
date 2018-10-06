import React from 'react';
import './IAmFed.css';
import { isMobile } from '../utils/Browsers';

const IAmFed = () => {
    if (isMobile) {
        return (
            <div className="fed-body-mobile">
                Front End Developer
            </div>
        )
    }
    return (
        <div className="fed-body">
            Front End Developer
        </div>
    )
};

export default IAmFed;