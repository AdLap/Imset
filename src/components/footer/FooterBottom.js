import React from 'react';
import './FooterBottom.scss';

const FooterBottom = () => {
    return (
        <div className='footer__bottom'>
            <ul className='footer__bottom__menu'>
                <li className='footer__bottom__menu__item'>
                    o nas
                </li>
                <li className='footer__bottom__menu__item'>
                    kontakt
                </li>
                <li className='footer__bottom__menu__item'>
                    kariera
                </li>
                <li className='footer__bottom__menu__item'>
                    dla mediów
                </li>
            </ul>
            <div className='footer__bottom__icons'>
                <div className='footer__bottom__icons__item'></div>
                <div className='footer__bottom__icons__item'></div>
                <div className='footer__bottom__icons__item'></div>
            </div>
        </div>
    );
}

export default FooterBottom;