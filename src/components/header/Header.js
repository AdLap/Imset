import React from 'react';
import MenuBar from './MenuBar';
import Panel from './Panel';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <MenuBar />
                <Panel />
            </div>
        </header>
    );
}

export default Header;
