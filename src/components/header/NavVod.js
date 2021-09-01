import React from 'react';
import Subtitle from '../utility/Subtitle';
import NavVodPromo from './NavVodPromo';
import './NavVod.scss';

const NavVod = () => {
    return (
        <div className='nav__vod'>
            <Subtitle text='vod' color='#84b82a' />
            <p className='nav__vod__desc'>
                Oglądaj wtedy, gdy masz czas i ochotę
            </p>
            <NavVodPromo />
        </div>
    );
}

export default NavVod;