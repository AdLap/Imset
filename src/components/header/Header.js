import React from 'react';
import Menu from './Menu';
import Panel from './Panel';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <Menu />
                <Panel />
            </div>
        </header>
    );
}

export default Header;
