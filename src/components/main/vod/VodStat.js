import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './VodStat.scss';

const VodStat = ({ number }) => {
    return (
        <div className='vod__stat'>
            <div className='vod__stat__title'>
                film obejrzy
            </div>
            <div className='vod__stat__number'>
                {number}
            </div>
            <div className='vod__stat__icon'>
                <FontAwesomeIcon icon={faUserFriends} />
            </div>
        </div>
    );
}

export default VodStat;