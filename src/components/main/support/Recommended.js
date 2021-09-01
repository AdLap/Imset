import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Recommended.scss';

const Recommended = ({ text, icon }) => {
    return (
        <div className='recommended'>
            <div className='recommended__text'>
                {text}
                <div className='recommended__text__icon'>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
        </div>
    );
}

export default Recommended;