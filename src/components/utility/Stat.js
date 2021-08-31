import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Stat.scss';

const Stat = ({ number, title }) => {
    return (
        <div className='stat'>
            <div className='stat__title'>
                {title}
            </div>
            <div className='stat__number'>
                {number}
            </div>
            <div className='stat__icon'>
                <FontAwesomeIcon icon={faUserFriends} />
            </div>
        </div>
    );
}

export default Stat;