import React from 'react';
import Nav from './Nav';
import NavVod from './NavVod';
import NavTv from './NavTv';
import './Menu.scss';

const Menu = () => {
    return (
        <div className='menu'>
            <Nav />
            <NavVod />
            <NavTv />
        </div>
    );
}

export default Menu;
