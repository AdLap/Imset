import React from 'react';
import Subtitle from '../utility/Subtitle';
import './NavTv.scss';

const NavTv = () => {
    return (
        <div className='nav__tv'>
            <Subtitle text='tv online' color='#84b82a' />
            <p className='nav__tv__desc'>
                Oglądaj telewizję przez internet na czym chcesz: komputer, tablet, telefon
            </p>
        </div>
    );
}

export default NavTv;