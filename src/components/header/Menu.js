import React, { useState } from 'react';
import './Menu.scss';
const Menu = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='menu'>
            <div className={isActive ? 'menu__burger-active' : 'menu__burger'}
                onClick={() => setIsActive(!isActive)}
            >
                <span className={isActive ? 'menu__burger-active__top' : 'menu__burger__top'}>{null}</span>
                <span className={isActive ? 'menu__burger-active__middle' : 'menu__burger__middle'}>{null}</span>
                <span className={isActive ? 'menu__burger-active__bottom' : 'menu__burger__bottom'}>{null}</span>
            </div>

        </div>
    );
}

export default Menu;
