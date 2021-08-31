import React from 'react';
import Subtitle from '../utility/Subtitle';
import './Nav.scss';

const Nav = () => {
    return (
        <div className='nav'>
            <Subtitle text='paczki i pakiety' color='#675190' />
            <ul className='nav__group'>
                <li className='nav__item'>
                    <a href='#' title='telewizja' className='nav__item__tv'>
                        telewizja
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' title='' className='nav__item__net'>
                        internet
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' title='' className='nav__item__phone'>
                        telefon
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' title='' className='nav__item__mobile'>
                        internet mobilny
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
