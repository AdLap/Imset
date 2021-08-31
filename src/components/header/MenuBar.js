import React, { useState } from 'react';
import Menu from './Menu';
import './MenuBar.scss';

const MenuBar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='menu__bar'>
            <div className={isActive ? 'burger-active' : 'burger'}
                onClick={() => setIsActive(!isActive)}
            >
                <span className={isActive ? 'burger-active__top' : 'burger__top'}>{null}</span>
                <span className={isActive ? 'burger-active__middle' : 'burger__middle'}>{null}</span>
                <span className={isActive ? 'burger-active__bottom' : 'burger__bottom'}>{null}</span>
            </div>
            {isActive && <Menu />}
        </div>
    );
}

export default MenuBar;
